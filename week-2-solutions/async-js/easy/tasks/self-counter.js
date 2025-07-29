async function timer(){
    setTimeout(()=> {
        callMe()
    },1000);
}

function callMe(){
    console.log("Calling timer");
    timer();
}

timer()



