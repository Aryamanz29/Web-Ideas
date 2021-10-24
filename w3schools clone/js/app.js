//Dark mode for codes

document
  .getElementById("dark-btn-container")
  .addEventListener("click", changeTheme);

function changeTheme() {
  let b = document.getElementsByClassName("code-box");
  let tagStart = document.getElementsByClassName("tagstart");
  let htmlTag = document.getElementsByClassName("html-tag");
  let docHtml = document.getElementsByClassName("docHtml");
  let cssPropertyName = document.getElementsByClassName("css-property-name");
  let cssPropertyValue = document.getElementsByClassName("css-property-value");
  let brown = document.getElementsByClassName("brown");
  let blue = document.getElementsByClassName("blue");
  if (b[0].style.color == "white") {
    for (let i = 0; i < b.length; i++) {
      b[i].style.backgroundColor = "white";
      b[i].style.color = "black";
      b[i].style.borderLeft = "solid 4px rgb(85, 179, 98)";
    }
    for (let i = 0; i < tagStart.length; i++) {
      tagStart[i].style.color = "mediumblue";
    }
    for (let i = 0; i < htmlTag.length; i++) {
      htmlTag[i].style.color = "brown";
    }
    for (let i = 0; i < docHtml.length; i++) {
      docHtml[i].style.color = "red";
    }
    for (let i = 0; i < cssPropertyName.length; i++) {
      cssPropertyName[i].style.color = "red";
    }
    for (let i = 0; i < cssPropertyValue.length; i++) {
      cssPropertyValue[i].style.color = "blue";
    }
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "brown";
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "blue";
    }
  } else {
    for (let i = 0; i < b.length; i++) {
      b[i].style.backgroundColor = "rgb(40,44,52)";
      b[i].style.color = "white";
      b[i].style.borderLeft = "none";
    }
    for (let i = 0; i < tagStart.length; i++) {
      tagStart[i].style.color = "#88c999";
    }
    for (let i = 0; i < htmlTag.length; i++) {
      htmlTag[i].style.color = "#ff9999";
    }
    for (let i = 0; i < docHtml.length; i++) {
      docHtml[i].style.color = "#c5a5c5";
    }
    for (let i = 0; i < cssPropertyName.length; i++) {
      cssPropertyName[i].style.color = "#c5a5c5";
    }
    for (let i = 0; i < cssPropertyValue.length; i++) {
      cssPropertyValue[i].style.color = "#88c999";
    }
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "#88c999";
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "#80b6ff";
    }
  }
}

// Login window pop up effect

document.getElementById("login-btn").addEventListener("click", ShowLoginWindow);
document
  .getElementById("close-login-window")
  .addEventListener("click", ShowLoginWindow);
let login_check = 0;
function ShowLoginWindow() {
  let loginWindow = document.getElementById("login-window");
  if (loginWindow.style.display == "none" || login_check == 0) {
    closeAllWindow();
    loginWindow.style.display = "grid";
    login_check = 1;
  } else {
    loginWindow.style.display = "none";
  }
}

//Tutorial Window Pop up effect

document
  .getElementById("tutorial-window-open")
  .addEventListener("click", ShowTutorialWindow);
document
  .getElementById("close-tutorial-window")
  .addEventListener("click", ShowTutorialWindow);
let tutorial_check = 0;
let tutorialIcon = document.getElementById("tutorial-window-icon");

function ShowTutorialWindow() {
  let tutorialWindow = document.getElementById("tutorial-window");
  if (tutorialWindow.style.display == "none" || tutorial_check == 0) {
    closeAllWindow();
    tutorialWindow.style.display = "grid";
    tutorial_check = 1;
    tutorialIcon.className = "fas fa-caret-up window-icon";
  } else {
    tutorialWindow.style.display = "none";
    tutorialIcon.className = "fas fa-caret-down window-icon";
  }
}

//Reference Window Pop up effect

document
  .getElementById("reference-window-open")
  .addEventListener("click", ShowReferenceWindow);
document
  .getElementById("close-reference-window")
  .addEventListener("click", ShowReferenceWindow);
let reference_check = 0;
let referenceIcon = document.getElementById("reference-window-icon");
function ShowReferenceWindow() {
  let referenceWindow = document.getElementById("reference-window");
  if (referenceWindow.style.display == "none" || reference_check == 0) {
    closeAllWindow();
    referenceWindow.style.display = "grid";
    reference_check = 1;
    referenceIcon.className = "fas fa-caret-up window-icon";
  } else {
    referenceWindow.style.display = "none";
    referenceIcon.className = "fas fa-caret-down window-icon";
  }
}

// Examples Window pop-up effect

document
  .getElementById("examples-window-open")
  .addEventListener("click", ShowExamplesWindow);
document
  .getElementById("close-examples-window")
  .addEventListener("click", ShowExamplesWindow);
let examples_check = 0;
let examplesIcon = document.getElementById("examples-window-icon");
function ShowExamplesWindow() {
  let examplesWindow = document.getElementById("examples-window");
  if (examplesWindow.style.display == "none" || examples_check == 0) {
    closeAllWindow();
    examplesWindow.style.display = "grid";
    examples_check = 1;
    examplesIcon.className = "fas fa-caret-up window-icon";
  } else {
    examplesWindow.style.display = "none";
    examplesIcon.className = "fas fa-caret-down window-icon";
  }
}

// Exercises Window pop up Effect

document
  .getElementById("exercises-window-open")
  .addEventListener("click", ShowExercisesWindow);
document
  .getElementById("close-exercises-window")
  .addEventListener("click", ShowExercisesWindow);
let exercises_check = 0;
let exercisesIcon = document.getElementById("exercises-window-icon");
function ShowExercisesWindow() {
  let exercisesWindow = document.getElementById("exercises-window");
  if (exercisesWindow.style.display == "none" || exercises_check == 0) {
    closeAllWindow();
    exercisesWindow.style.display = "grid";
    exercises_check = 1;
    exercisesIcon.className = "fas fa-caret-up window-icon";
  } else {
    exercisesWindow.style.display = "none";
    exercisesIcon.className = "fas fa-caret-down window-icon";
  }
}

//Close all Windows

function closeAllWindow() {
  let allWindow = document.querySelectorAll(".window");
  let allWindowIcon = document.querySelectorAll(".window-icon");
  document.getElementById("login-window").style.display = "none";
  for (let i = 0; i < allWindow.length; i++) {
    allWindow[i].style.display = "none";
  }
  for (let i = 0; i < allWindowIcon.length; i++) {
    allWindowIcon[i].className = "fas fa-caret-down window-icon";
    console.log(allWindowIcon[i].className);
    console.log(allWindowIcon);
  }
}

// Nav-menu open and close for smaller screen

document
  .getElementById("navbar-btn-container")
  .addEventListener("click", ShowNavMenu);
document
  .getElementById("close-nav-menu")
  .addEventListener("click", ShowNavMenu);
let navMenu_check = 0;

function ShowNavMenu() {
  let navMenu = document.getElementById("nav-menu-small");
  if (navMenu.style.display == "none" || navMenu_check == 0) {
    navMenu.style.display = "grid";
    navMenu_check = 1;
  } else {
    navMenu.style.display = "none";
  }
}
