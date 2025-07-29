const fs = require('fs').promises;



function recurse(n){
     if(n === 0) return
     recurse(n-1); 
}

async function  readFromFile() {
    const res = await fs.readFile(__dirname + '/dadada.txt', 'utf-8');
    recurse(10000);
    console.log(res);
    

}

readFromFile()