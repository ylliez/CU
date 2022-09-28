// a promise - promises something in the future
// inside the promise is what executes ...
//resolve() - tells js that we are done and have a value
//reject() - used to throw  an  error
//promises are great because you do not need to nest the code - easier to control
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//window.onload = function () {
const buttonCallB = document.querySelector("#callbackB");
const responseB = document.querySelector("#responseB");

buttonCallB.addEventListener("click", function () {
  console.log("clicked B");
  checkAuth_A(document.querySelector("#user-string-B").value)
    .then(
      // resolve
      function (result) {
        console.log("result:: " + result);
        return changeString_A(result);
      },
      // reject
      function (reject) {
        // console.log("reject:: " + reject);
        return new Promise((resolve, reject) => {
          reject("error occurred");
        })
      }
    )
    .then(
      function (result) {
        console.log(result);
      }
    )
    .catch(
      function (error) {
        console.log("error:: " + error);
      }
    )
})

function checkAuth_A(userString) {
  return new Promise((resolve, reject) => {
    //console.log(userString);
    setTimeout(() => {
      let userFruit = "";
      if (userString === "Sabine") {
        userFruit = "pineapple";
        resolve(userFruit);
      } else {
        userFruit = "noFruit";
        reject(userFruit);
      }
      console.log("time-out one-a complete " + userFruit);
    }, 2000);
  })
}

function changeString_A(fruitString) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userFruitwithstars = fruitString.split("").join("*");
      console.log("time-out two-a complete " + userFruitwithstars);
      resolve(userFruitwithstars);
    }, 2000); // let 2 secs go past then send back
  })
}