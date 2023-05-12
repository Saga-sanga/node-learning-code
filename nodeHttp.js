// POST request using standard Node library
const https = require("https");

const data = JSON.stringify({
  todo: 'Buy milk',
})

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  }
}

const req = https.request(options, req => {
  console.log(`Status Code: ${res.statusCcode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => console.log(error));

req.write(data);
req.end();
