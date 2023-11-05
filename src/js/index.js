const htmlTag = document.getElementsByTagName("html");
const mode = document.getElementById("mode");
const greeting1 = document.getElementById("greeting-1");
const greeting2 = document.getElementById("greeting-2");
const greeting3 = document.getElementById("greeting-3");
const greeting4 = document.getElementById("greeting-4");
const greeting5 = document.getElementById("greeting-5");
const currentYear = document.getElementById("current-year");

const line1 = "I'm a quick learner who can master any subject.";
const line2 = "If we match, I'd love to join your team.";
const line3 = "I'm currently looking for work!";
const line4 = "Yours,";
const line5 = "Dejan";

let count = 0;
let interval;
let currentWidth = 0;

function rotateElement(elementId, degrees) {
  const el = document.getElementById(elementId);
  if (el) {
    el.style.transform = `rotate(${degrees}deg)`;
    el.style.transition = "all 0.1s ease";
  }
}

function wave() {
  setTimeout(() => {
    rotateElement("wave", -20);
    setTimeout(() => {
      rotateElement("wave", 0);
    }, 350);
  }, 350);
}

function typeLine(htmlElement, textToType, runCallback = null) {
  const lineArray = textToType.match(/.{1}/g);

  while (count < lineArray.length) {
    interval = setInterval(() => {
      if (count < lineArray.length) {
        if (htmlElement) {
          htmlElement.textContent += lineArray[count];
          count++;
        }
      } else {
        clearInterval(interval);
        if (runCallback) {
          count = 0;
          runCallback();
        }
      }
    }, 50);
    break;
  }
}

function changeAppearance() {
  if (htmlTag && mode) {
    htmlTag[0].classList.toggle("light-mode");
    if (mode.src.includes("/img/moon.png")) {
      mode.src = "src/assets/img/sun.png";
      localStorage.setItem("mode", "light");
    } else {
      mode.src = "src/assets/img/moon.png";
      localStorage.setItem("mode", "dark");
    }
  }
}

function loadSavedAppearance() {
  if (htmlTag && mode) {
    if (localStorage.getItem("mode") === "light") {
      htmlTag[0].classList.add("light-mode");
      mode.src = "src/assets/img/sun.png";
    } else {
      htmlTag[0].classList.remove("light-mode");
      mode.src = "src/assets/img/moon.png";
    }
  }
}

function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;

  const isFullyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;
  return isFullyVisible;
}

function changeWidth(element, toWidth) {
  if (toWidth > 0) {
    if (currentWidth < toWidth) {
      currentWidth++; //not 100% accurate during loops. Missing check?
      element.style.width = currentWidth + "%";
      element.firstElementChild.textContent = currentWidth + "%";
    }
  }
}

function animateBarChartPercentages() {
  const percentBars = document.querySelectorAll(".percent");
  
  if (percentBars) {
    const firstBar = percentBars[0];

    window.addEventListener("scroll", () => {
      if (isScrolledIntoView(firstBar)) {
        for (const bar of percentBars) {
          let targetWidth = parseInt(bar.className.split("-")[1]);
          changeWidth(bar, targetWidth);
        }
      }
    });
  }
}

function addEventListeners() {
  if (mode) {
    mode.addEventListener("click", changeAppearance);
  }
  animateBarChartPercentages();
}

document.addEventListener("DOMContentLoaded", () => {
  loadSavedAppearance();
  
  wave();

  typeLine(greeting1, line1, () =>
    typeLine(greeting2, line2, () =>
      typeLine(greeting3, line3, () =>
        typeLine(greeting4, line4, () => typeLine(greeting5, line5))
      )
    )
  );

  addEventListeners();

  if (currentYear) {
    currentYear.textContent += new Date().getFullYear();
  }
});
