const fs = require('fs').promises;



async function writeInFile() {
      await fs.writeFile(__dirname + '/writeInMe.txt',"hellsjdklfasfslf");
     showOutput();
}

function showOutput(){
    fs.readFile(__dirname + "/writeInMe.txt", 'utf-8')
    .then(res=> {
                console.log(`Content: ${res}`);
    })
    .catch(err =>{
        console.error(`Error: ${err}`);
    })
}

writeInFile()