const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/000.png") {
    myImage.setAttribute("src", "images/001.png");
  } else {
    myImage.setAttribute("src", "images/000.png");
  }

};



function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `SD art is cool, ${myName}`;
    }
  }
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `SD art is cool, ${storedName}`;
  }

myButton.onclick = () => {
  setUserName();
};


// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// /* First Javascript*/
// // cool comments

// alert("Yay, I love chocolate ice cream!");

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// document.querySelector("img").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });