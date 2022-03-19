const fs = require("fs");

// reading files
// fs.readFile('./docs/blog1.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log("Last Line")

// writing files

// fs.writeFile('./docs/blog1.txt',"Hello World !" , () => {

//     console.log("FILE IS WRITTEN");
// })

// directories

if (!fs.existsSync("./Abhi")) {
    fs.mkdir('./Abhi',() => {
        console.log('Folder Created');
    })
}else{
    fs.rmdir('./Abhi',() => {
        console.log('Folder Removed');
    })
}

//deleting files
fs.unlink('file_name' ,(err) => {
    
})