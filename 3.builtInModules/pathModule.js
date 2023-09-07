// Import 'path' module using the 'require()' method:
const path = require('path')

// Assigning a path to the myPath variable
const myPath = __filename;

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);

// path separator for windows is \ while for macOs it's /
console.log("path separator for macOs is", path.sep);


// path.join() concats strings with a path separator based on OS(i.e., \ for windows and / for macOS)
let pathToOsModule = path.join('/Users', 'nagalakshmgayathri', 'NodeConcepts', '3.builtInModules', 'osModule.js');
console.log("path to OS Module using path.join() is", pathToOsModule);


/* path.resolve() joins the strings in the same as path.join. 
But it appends the final output to the absolute path of the present working directory.
*/

 pathToOsModule = path.resolve('osModule.js');

 console.log("path to OS module using path.resolve() is", pathToOsModule)