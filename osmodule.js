const os=require('os')

console.log("Hello...Welcome to OS"+ os.EOL+"An inbuilt module"+os.EOL);
console.log(`OS Platform : ${os.platform()}`+os.EOL);
console.log(`OS architecture : ${os.arch()}`+os.EOL);
console.log("CPU info :\n",os.cpus());
console.log(`CPU length : ${os.cpus.length}`);
console.log(`Total run time of CPU since last reboot : ${os.uptime()} seconds`);
console.log(os.EOL+`Home directory of user : ${os.homedir()}`);
console.log("User info :",os.userInfo())
console.log(`OS release number : ${os.release()}`);
console.log(`Total memory in system : ${os.totalmem()} bytes`);