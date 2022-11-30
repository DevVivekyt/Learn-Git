const fs = require('fs');

fs.writeFileSync('bio.txt', 'vivek mishrs')

fs.appendFileSync('bio.txt', ' ankur mishra')

const buf_data = fs.readFileSync('bio.txt').toString();
console.log(buf_data);

fs.renameSync('bio.txt','mybio.txt')

fs.unlinkSync('mybio.txt')

fs.rmdirSync('Thapa')
