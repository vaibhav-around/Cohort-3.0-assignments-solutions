const fs = require('fs').promises;


async function writeInFile(e) {
    if(!e){
        throw new Error("No String provided!");
    }
    await fs.writeFile(__dirname + '/file.txt', e)
    .then(()=> console.log("File Updation successfull"))
    .catch((e) => console.log(`Error while writing file: ${e}`)
    )
}

async function readAndClean(){
    await fs.readFile(__dirname + '/file.txt', 'utf-8')
    .then((e)=>{
        e = e.replace(/\s+/g,' ');
        return e;
    })
    .then((e)=>{
        // console.log("Content to be put into file: ", e);
        writeInFile(e);
    })
    .catch((e)=>{
        console.log(`Error: ${e}`);
    })
}

readAndClean()