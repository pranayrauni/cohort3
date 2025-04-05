// callback hell

// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

setTimeout(function () {
  console.log("hi");

  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// alternate solution which does not really have callback hell

function step3() {
  console.log("hello there");
}

function step2() {
  console.log("hello");
  setTimeout(step3, 5000);
}

function step1() {
  console.log("hi");
  setTimeout(step2, 3000);
}

setTimeout(step1, 1000);

// callback hell in promisified version
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});


// alternate solution - no callback hell
setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
}).then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function () {
    console.log("hello there");
});



// async await

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi")
    await setTimeoutPromisified(3000);
    console.log("hello")
    await setTimeoutPromisified(5000);
    console.log("hello there")
}

solve();




// create promisified version of fetch