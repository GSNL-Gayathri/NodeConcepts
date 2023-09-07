// Import fs module
const fs = require('fs');

// Present Working Directory: /Users/nagalakshmigayathri/NodeConcepts/3.builtInModules
// Making a new directory called ./myFolder:

// fs.mkdir('./myFolder', (err) => {
//     if(err){
//     	console.log(err);
//     } else{
//     	console.log('Folder Created Successfully');
//     }
// })

const data = 'Hi,this is newFile.txt\n';

fs.writeFile('./myFolder/myFileOverwrite.txt', data, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})


/*
Everytime we call this writeFile method, it creates the file if not exists and it erases any previous data present in that file and adds the new data,
instead of appending it to the previous data.So to avoid that we are adding a 3rd parameter {flag: 'a'} to this function. 
*/

const dataTwo = `
PGPASSWORD=Q7TMh7qKseYexNfGfSv8SyWL pg_dump -h localhost -p 5434 -Fc -s -O -x -U postgres -d nassignment -t '"StudentAssignment"."ZZ"' > ZZ_structure.sql \n
PGPASSWORD=Q7TMh7qKseYexNfGfSv8SyWL pg_dump  -Fc -h localhost -p 5434 -U postgres -a -d nassignment -t '"StudentAssignment"."ZZ"' > ZZ_data.sql\n
`;


fs.writeFile('./myFolder/myFileAppends.txt', dataTwo, {flag: 'a'}, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})