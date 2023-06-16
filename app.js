const mySliderImages = Array.from(document.querySelectorAll("main img"));
const sliderCountInfo = document.querySelector(".slide-info");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const bulletsContainer = document.querySelector(".bullets");
// variables options
let count = 1;
let silderCount = mySliderImages.length;
//events

createDomElement();

const bullets = Array.from(document.querySelectorAll(".bullets span"));

nextButton.addEventListener("click", handleNextButton);

previousButton.addEventListener("click", handlePreviousButton);

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    handleBullets(bullet);
  });
});

mainFuncHandling();

// functions

function handleNextButton() {
  if (nextButton.classList.contains("disable")) {
    return 0;
  } else {
    count++;
    mainFuncHandling();
  }
}

function handlePreviousButton() {
  if (previousButton.classList.contains("disable")) {
    return 0;
  } else {
    count--;
    mainFuncHandling();
  }
}

function handleBullets(bullet) {
  count = parseInt(bullet.dataset.id);
  mainFuncHandling();
}

function mainFuncHandling() {
  sliderCountInfo.innerHTML = `Slide #${count} of ${silderCount}`;

  removeAllClasses(mySliderImages);
  removeAllClasses(bullets);

  mySliderImages[count - 1].classList.add("active");
  bullets[count - 1].classList.add("active");
  checkStatus();
}

function createDomElement() {
  let output = "";
  for (let i = 0; i < silderCount; i++) {
    output += `<span data-id="${i + 1}">${i + 1}</span>`;
  }
  bulletsContainer.innerHTML = output;
}

function checkStatus() {
  if (count === 1) {
    previousButton.classList.add("disable");
  } else {
    previousButton.classList.remove("disable");
  }
  if (count === silderCount) {
    nextButton.classList.add("disable");
  } else {
    nextButton.classList.remove("disable");
  }
}
function removeAllClasses(elmenets) {
  elmenets.forEach((element) => {
    element.classList.remove("active");
  });
}

console.log("learn how to use git and github");
