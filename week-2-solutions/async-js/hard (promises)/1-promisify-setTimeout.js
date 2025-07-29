/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



function wait(n) {
    if(!n) {
        throw new Error("NO time Given");
    }
    return new Promise(resolve => setTimeout(resolve,n*1000))
}


