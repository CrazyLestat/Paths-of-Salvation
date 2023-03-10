/*NAVIGATION*/
const nav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible");
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
} );

/*TEXT EFFECTS*/
const titleText = document.querySelector(".title");
const strTitleText = titleText.textContent;
const splitTitleText = strTitleText.split("");
titleText.textContent = "";
const fadeIn = document.querySelectorAll(".fade-in");

for (let i = 0; i < splitTitleText.length; i++) {
  titleText.innerHTML += "<span>" + splitTitleText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 80);

function onTick() {
  const span = titleText.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitTitleText.length) {
    complete();
    fadeIn[0].classList.add("visible");
    fadeIn[1].classList.add("visible");
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

/*CAROUSEL*/
const previous = document.getElementById('button-previous');
const chestsDivs = document.querySelectorAll(".single-service");

function changeChest() {
  if (chestsDivs[0].classList.contains('active')) {
    chestsDivs[0].classList.remove('active');
    chestsDivs[1].classList.add('active');
} 
else if (chestsDivs[1].classList.contains('active')) {
  chestsDivs[1].classList.remove('active');
  chestsDivs[2].classList.add('active');
 }
 else {
  chestsDivs[2].classList.remove('active');
  chestsDivs[0].classList.add('active');
 }
}
previous.addEventListener('click', () => {
  changeChest();
})
let timer3 = setInterval(changeChest, 5000);

function complete3() {
  clearInterval(timer3);
  timer3 = null;
}


const card = document.querySelectorAll('.card');
const next = document.getElementById('button-next');

function changeCard() {
  if (card[0].classList.contains('active')) {
    card[0].classList.remove('active');
    card[1].classList.add('active');
} 
 else {
  card[1].classList.remove('active');
  card[0].classList.add('active');
 }
}
next.addEventListener('click', () => {
  changeCard();
})
let timer2 = setInterval(changeCard, 6000);

function complete2() {
  clearInterval(timer2);
  timer2 = null;
}