const { people, ages } = require("./people");
const os = require("os");

console.log(os.platform(), os.homedir(), os.cpus(), os.uptime());
