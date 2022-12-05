window.onload = function () {
  main();
};

// main function and all connected here
function main() {
  // select darkLightCheckChecked
  const darkLightCheckChecked = document.getElementById(
    "darkLightCheckChecked"
  );

  // toggle darkLightCheckChecked
  darkLightCheckChecked.addEventListener(
    "click",
    handleDarkLightToggle(darkLightCheckChecked)
  );
}

// handle darkLightCheckChecked function
function handleDarkLightToggle() {
  return function (e) {
    // console.log(e.target.checked);
    const isDark = e.target.checked;
    headerArea(isDark);
  };
}

function headerArea(isDark) {
  // select nav tag
  const nav = document.querySelector("header nav");
  // select logo
  const logo = document.querySelector("header nav #logo");

  
  if (isDark) {
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "bg-dark");
    logo.src = "./assets/images/logo-for-dark-mode.svg";
  } else {
    nav.classList.add("navbar-light", "bg-light");
    nav.classList.remove("navbar-dark", "bg-dark");
    logo.src = "./assets/images/logo-for-white-mode.svg";
  }
}
