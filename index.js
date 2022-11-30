const fs = require('fs')

// creating new file
// fs.writeFileSync("read.txt", "welcome");

// overwirte data
// fs.writeFileSync("read.txt", "welcome to first node js file");

// Add new data in current file
// fs.appendFileSync('read.txt', "  vivek")

// to read other files data
// const buf_data = fs.readFileSync('read.txt');
// const org_data = buf_data.toString();
// console.log(org_data);

// rename file name
// fs.renameSync('read.txt', 'readWrite.txt')

// delete file
// fs.unlinkSync('mybio.txt')

// delete folder
fs.rmdirSync('Thapa')
