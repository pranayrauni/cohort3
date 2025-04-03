function callback1 () {
    console.log("time passed")
}

setTimeout(callback1, 2000)




function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
setTimeoutPromisified(3000).then(callback)
  


function random (resolve) {
    resolve()
}

let p = new Promise(random)

function callback (){
    console.log("promise succeded")
}

p.then(callback);





// promisified version of readFile

const fs = require("fs")

function readTheFile(senTheFinalValueHere) {
    fs.readFile("a.txt", "utf-8", function(err, data){
        senTheFinalValueHere(data);
    })
}

function readFile(fileName){
    // red the file and returns its value
    return new Promise(readTheFile)
}

p1 = readFile();

function callback2(contents){
    console.log(contents)
}

p1.then(callback2)