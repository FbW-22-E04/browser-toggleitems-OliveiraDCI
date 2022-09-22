"use strict";

const wrapper = document.getElementById("wrapper");
const main = document.getElementById("main");
const button = document.getElementById("btn");

wrapper.addEventListener("click", (e) => {
  button.classList.toggle("btnToggle");
  if (e.target.classList.contains("btnToggle")) {
    main.style.visibility = "collapse";
    button.textContent = "Show Destinations";
  } else {
    main.style.visibility = "visible";
    button.textContent = "Hide Destinations";
  }
});
