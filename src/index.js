const body = document.querySelector("body");
body.style.backgroundColor = "#914EAD";

const title = document.querySelector("body h1");
title.style.color = "whitesmoke";

function handleWindowResize() {
  const browserWidth = window.innerWidth;
  if (browserWidth > 1000) {
    body.style.backgroundColor = "#EEBC12";
  } else if (browserWidth >= 600 && browserWidth <= 1000) {
    body.style.backgroundColor = "#914EAD";
  } else if (browserWidth < 600) {
    body.style.backgroundColor = "#2E8CD5";
  }
}

window.addEventListener("resize", handleWindowResize);
