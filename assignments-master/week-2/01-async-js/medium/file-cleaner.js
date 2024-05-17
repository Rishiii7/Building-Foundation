const fs = require('fs')

// reading the file
fs.readFile('a.txt', 'utf-8', (err,data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);

    //trimming extra space between words
    const dataSplit = data.replace(/\s+/g, ' ');
    // console.log(dataSplit);

    fs.writeFile('a.txt', dataSplit, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })

    // console.log(data);

});