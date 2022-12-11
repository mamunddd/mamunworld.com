window.onload = function () {
  main();
};

// main function and all connected here
function main() {
  // select all elements
  const lightSwitch = document.getElementById("lightSwitch");

  // handle and connect all elements
  lightSwitch.addEventListener("click", handleLightSwitch(logoForDark));
  if (localStorage.getItem("lightSwitch") === "dark") {
    logoForDark(true);
  } else {
    logoForDark(false);
  }
}

/**
 *
 * Handle and check dark or light mode
 *
 */
function handleLightSwitch() {
  return function (e) {
    const isDark = e.target.checked;
    logoForDark(isDark);
  };
}

/**
 * logo change for dark mode
 */
function logoForDark(isDark) {
  const logo = document.querySelectorAll(".logo_wite_mode");

  if (isDark) {
    logo.forEach((item) => {
      item.src = "./assets/images/logo-for-dark-mode.svg";
    });
  } else {
    logo.forEach((item) => {
      item.src = "./assets/images/logo-for-white-mode.svg";
    });
  }
}
