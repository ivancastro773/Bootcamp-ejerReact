const axios = require('axios');

const baseURL = "https://api.github.com/users/ivancastro773";
export const petition = axios.get(baseURL)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });