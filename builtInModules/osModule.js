const os = require("os");


const uptime = os.uptime();
const userInfo = os.userInfo();

const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}



console.log("os uptime is from last reboot of system till now:", uptime);
console.log("userInfo of this system is ", userInfo);
console.log("system other info", otherInfo);