const myPromise = new Promise((resolve, reject) => {
    let condition;

    if(condition) {
        resolve("Promise is resolved successfully.");
    }
    else {
        reject("promise is rejected");
    }
})
myPromise .then((message)=>{
    console.log("message",message);
})
.catch((message)=>{
    console.log("message",message);
})
// run: node index.js.