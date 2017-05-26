const komada = require('komada');
const auth = require('./auth.json');
komada.start({
  "botToken": auth.discord.token,
  "ownerID" : '199621462586425346',
  "clientID": '317732508684910603',
  "prefix": "f!",
  "clientOptions": {
    "fetchAllMembers": true
  }
});