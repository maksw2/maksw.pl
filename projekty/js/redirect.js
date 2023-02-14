if (location.protocol == 'https:') // detect https
  location.href = location.href.replace(/^https:/, 'http:') // change the protocol from https:/ to http:
// a _normal_ version of this script (http to https) can be found in /js/redirect.js
// credit: some guy on stackoverflow
// modified by me
