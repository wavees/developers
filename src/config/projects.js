// import
import { readable, writable } from 'svelte/store';
import axios from "axios";

const api = "https://api.wavees.co.vu";

// Function, that'll handle process of
// creation of projects list store.
function createProjectsListStore() {
  // Default store values
  let store = {
    loaded: false,

    list: []
  };

  // We need to get some useful "components"
  const { set, update, subscribe } = writable(store);

  // And here we'll return our store
  // functions and so on
  return {
    subscribe,
  
    // @function loadProjects(token)
    // @description This function accepts
    // one argument - user token.
    loadProjects: (token) => {
      // Now we need to make request to internal API
      axios.get(`${api}/application/${token}/list`)
      .then((response) => {
        let data = response.data;

        if (data.length >= 1) {
          // And now we need to update this store
          // with new data...
          update((object) => {
            object.loaded = true;
            object.list = data;

            return object;
          });
        };
      }).catch(() => {
        // Here we'll just return empty store object.
        update(() => {
          return store;
        });
      });
    }
  };
};

// Here we'll create new Projects List
// store
const list = createProjectsListStore();

// And now we need to export this store.
export { list };


// Function, that'll handle process of creation
// of Current Project store.
function createCurrentStore() {
  // Initial store object
  let store = {
    loaded: false,

    appId: null,

    branding: {
      name: null,
      logotype: null
    }
  };

  // Here we'll get some useful things...
  const { set, update, subscribe } = writable(store);

  // And now we need to return store
  return {
    subscribe,

    // loadProject
    // Loads project with specified id
    loadProject: (appId) => {
      axios.get(`${api}/application/${appId}`)
      .then((response) => {
        let data = response.data;

        update((object) => {
          object.loaded            = true;
          // AppId
          object.appId             = appId;

          // Branding
            // Name
          object.branding.name     = data.name,
            // Logotype
          object.branding.logotype = data.logotype;

          return object;
        });
      }).catch((error) => {
        let data = error.response.data || {};

        if (data.error != "NotFound") {
          current.loadProject(appId);
        } else {
          update((object) => {
            object.loaded = true;

            return object;
          })
        }
      })
    }
  }
};

// now we need to create Current Project store
const current = createCurrentStore();

// Let's export this store
export { current };