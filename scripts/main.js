const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me.png") {
    myImage.setAttribute("src", "images/me2.png");
  } else {
    myImage.setAttribute("src", "images/me.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName(); //
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Nice to meet you, ${myName}. I'm Dylan`;
  }
}

// This will now call setUserName() every time the page is loaded, instead of storing it like the tutorial
setUserName();

myButton.onclick = () => {
  setUserName();
};
