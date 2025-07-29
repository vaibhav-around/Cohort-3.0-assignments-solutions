

async function clock(){
    setInterval(() => {
        let date = new Date;
        const filteredTime = date.toLocaleTimeString('en-IN', {hour12: true});
        console.log(filteredTime);
    }, 1000);
}
clock()