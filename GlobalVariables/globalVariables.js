/*
Global variables are accessed from anywhere in the file, i.e., From any number of the nested functions or objects etc.
*/

/* __dirname and __filename are global varibles, we can access them in any file.
*/
const dirName = __dirname;
const fileName = __filename;
console.log("dirName", dirName);
console.log("fileName", fileName);

/* We can also make a variable as global by using following methods.
*/
global.myName = "Gayathri";
global.myRole = "Backend Engineer";
console.log("My name is ", myName);
console.log("I am a", myRole);