// console.log(global);
setTimeout(() => {
    console.log("IN TIMEOUT");
    clearInterval(interval);
},6000) 


const interval = setInterval(() => {
    console.log("IN INTERVAL");
},2000) 

