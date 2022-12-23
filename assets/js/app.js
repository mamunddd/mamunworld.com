window.onload = function () {
  main();
};

// main function and all connected here
function main() {
  // select all elements
  const lightSwitch = document.getElementById("lightSwitch");
  const my_resume = document.querySelector("#my_resume");
  const my_resume_btn = my_resume.querySelectorAll(".resume_btn");
  const my_resume_show = my_resume.querySelectorAll("#resume_show .row");

  // *****************======####======*****************
  // handle and connect all elements
  lightSwitch.addEventListener("click", handleLightSwitch(logoForDark));
  if (localStorage.getItem("lightSwitch") === "dark") {
    logoForDark(true);
  } else {
    logoForDark(false);
  }

  // handle my_resume
  my_resume_btn[0].addEventListener("click", handleSkill(my_resume_show));
  my_resume_btn[1].addEventListener("click", handleExperiences(my_resume_show));
  my_resume_btn[2].addEventListener("click", handleEducation(my_resume_show));
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

/**
 *
 * my_resume evenHandler
 *
 */
function handleSkill(my_resume_show) {
  return function () {
    my_resume_show[0].classList.remove("d-none");
    my_resume_show[1].classList.add("d-none");
    my_resume_show[2].classList.add("d-none");
  };
}
function handleExperiences(my_resume_show) {
  return function () {
    my_resume_show[0].classList.add("d-none");
    my_resume_show[1].classList.remove("d-none");
    my_resume_show[2].classList.add("d-none");
  };
}
function handleEducation(my_resume_show) {
  return function () {
    my_resume_show[0].classList.add("d-none");
    my_resume_show[1].classList.add("d-none");
    my_resume_show[2].classList.remove("d-none");
  };
}
