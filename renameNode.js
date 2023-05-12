const fs = require('fs');

fs.rename('http.js', 'nodeHttp.js', err => {
  if (err) {
    console.log(err);
  }

  console.log('Done renaming');
})
