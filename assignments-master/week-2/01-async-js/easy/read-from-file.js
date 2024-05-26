const fs = require('fs')

function processFile(data){
    return data.replace(/\n{2,}/g, '\n');
}

console.log("Read the Files");

fs.readFile('3-read-from-file.md', 'utf-8', (err, data) => {
    console.log("Contents of the file are :\n");
    console.log(data);

    // Replace multiple consecutive new lines with a single new line
    const cleanedData = processFile(data);

    console.log("Writing the content to the file");
    fs.writeFile('3-read-from-file.md', cleanedData, 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File is written successfully");
        console.log(cleanedData);
    });
});

console.log("Files Read");

let a=0;
for(let i=0; i<1000; i++){
    a += i;
}

console.log(a);