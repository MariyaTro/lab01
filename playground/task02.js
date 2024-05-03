const fs = require('fs');


const filePath = 'task02.txt';
const newLine = 'Hello, World!\n';


fs.appendFile(filePath, newLine, (err) => {
    if (err) throw err;
    console.log('Hello, World!');
});
