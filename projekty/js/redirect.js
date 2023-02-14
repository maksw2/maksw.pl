if (location.protocol == 'https:') // detect https
  location.href = location.href.replace(/^https:/, 'http:') // change the protocol from https:/ to http:
// credit: some guy on stackoverflow
// modified by me
