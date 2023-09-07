const fs = require('fs');
const XLSX = require('xlsx');
const crypto = require('crypto');

// Load the Excel file
const fileName = 'EUPHIOUS-AP-NEW.xlsx';
const workbook = XLSX.readFile(`${__dirname}/inputFiles/${fileName}`);

// Specify the sheet you want to work with
const sheetName = 'Sheet1'; // Change to your sheet name

// Specify the column to encrypt
const column = 'A'; // Change to the column you want to encrypt

let rowCount = 0;
// Iterate over the rows and cells in the specified column
const sheet = workbook.Sheets[sheetName];
for (const cellAddress in sheet) {
  if (cellAddress.startsWith(column)&& cellAddress.substring(1)>=2) {
    rowCount +=1;
    console.log(cellAddress);
    const cell = sheet[cellAddress];
    if (cell.t === 's') {
      // Encrypt the cell value using the 'crypto' module
      const encryptedValue = crypto.createHash('sha256').update(cell.v).digest('hex');
      cell.v = encryptedValue;
    }
  }
}
console.log("rowCountExcludingHeader",rowCount);

// Create a new Excel file with modifications
XLSX.writeFile(workbook, `${__dirname}/outputFiles/outnew${fileName}`);

console.log('Encrypted Excel file created: output.xlsx');
