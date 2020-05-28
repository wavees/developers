import { readable, writable } from 'svelte/store';
import axios from "axios";

// 
// @explanation
// Header items consist of header items.
// Logic, isn't it?
const headerItems =
readable([
  // 
  // {
  //   id: "test",
  //   url: "/test",
  //   name: "Test",
  // },

  // Logotype item
  // Yeah, we MUST leave it here.
  {
    id: "logotype"
  },

  // 
  // {
  //   id: "test2",
  //   url: "/test2",
  //   name: "Test 2",
  // }
]);

export { headerItems };

const general =
readable({
  // Site url
  // Hmm, just site url, isn't it?
  url: "wavees.co.vu"
});

export { general };

//
// @explanation
// Config object, that consists url's and keys to access
// private API, that was made especially for this site.
const api = 
readable({
  // API URL and version parameters
  url: "https://api.wavees.co.vu", 
  version: 1
});

export { api };

// 
// PROJECTS OBJECT
// Here we'll make some requests to remote API
// to get projects list.
// 
function createProjectsStore() {
  const { subscribe, set, update } = writable([ ]);

  return {
    subscribe,

    updateProjects: (number) => {
      axios.get(`https://api.wavees.co.vu/network/projects`)
      .then((response) => {
        let data = response.data;

        if (number == "all") {
          set(data);
        } else {
          let sortedProjects = [];

          for (let index = 0; index < number; index++) {
            const element = data[index];
            sortedProjects.push(element);
          };

          set(sortedProjects);
        }
      })
    }
  }
};

const projects = createProjectsStore();

export { projects };