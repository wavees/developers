import { readable, writable } from 'svelte/store';

const general =
readable({
  // Site url
  // Hmm, just site url, isn't it?
  url: "developers.wavees.co.vu"
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