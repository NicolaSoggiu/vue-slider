// // FUNCTIONS

// // FUNCTION TO SCROLL DOWN
// function showNextSlides() {
//   listHighlighted[activeIndex].classList.remove("active");
//   listThumbs[activeIndex].classList.remove("active");
//   titleGame[activeIndex].classList.remove("h3-active");
//   textInfo[activeIndex].classList.remove("p-active");
//   activeIndex++;
//   if (activeIndex >= listHighlighted.length) {
//     activeIndex = 0;
//   }
//   listHighlighted[activeIndex].classList.add("active");
//   listThumbs[activeIndex].classList.add("active");
//   titleGame[activeIndex].classList.add("h3-active");
//   textInfo[activeIndex].classList.add("p-active");
// }
// btnNext.addEventListener("click", showNextSlides);

// // FUNCTION TO SCROOL UP
// function showPrevSlides() {
//   listHighlighted[activeIndex].classList.remove("active");
//   listThumbs[activeIndex].classList.remove("active");
//   titleGame[activeIndex].classList.remove("h3-active");
//   textInfo[activeIndex].classList.remove("p-active");
//   activeIndex--;
//   if (activeIndex < 0) {
//     activeIndex = listHighlighted.length - 1;
//   }
//   listHighlighted[activeIndex].classList.add("active");
//   listThumbs[activeIndex].classList.add("active");
//   titleGame[activeIndex].classList.add("h3-active");
//   textInfo[activeIndex].classList.add("p-active");
// }

// btnPrev.addEventListener("click", showPrevSlides);

// // FUNCTION TO ADD EVENTLISTENER TO THE MINIATURES
// for (let i = 0; i < listThumbs.length; i++) {
//   listThumbs[i].addEventListener("click", function () {
//     console.log("clicclata la miniatura in posizione" + i);
//     listHighlighted[activeIndex].classList.remove("active");
//     listThumbs[activeIndex].classList.remove("active");
//     titleGame[activeIndex].classList.remove("h3-active");
//     textInfo[activeIndex].classList.remove("p-active");
//     activeIndex = i;
//     listHighlighted[activeIndex].classList.add("active");
//     listThumbs[activeIndex].classList.add("active");
//     titleGame[activeIndex].classList.add("h3-active");
//     textInfo[activeIndex].classList.add("p-active");
//   });
// }

// // SHOW THE FIRST TITLE AND THE FIRST TEXT WHEN I LOAD THE PAGE
// titleGame[0].classList.add("h3-active");
// textInfo[0].classList.add("p-active");

// // SCROOL IMG EVERY 3 SEC
// setInterval(() => {
//   listHighlighted[activeIndex].classList.remove("active");
//   listThumbs[activeIndex].classList.remove("active");
//   titleGame[activeIndex].classList.remove("h3-active");
//   textInfo[activeIndex].classList.remove("p-active");
//   activeIndex++;
//   if (activeIndex >= listHighlighted.length) {
//     activeIndex = 0;
//   }
//   listHighlighted[activeIndex].classList.add("active");
//   listThumbs[activeIndex].classList.add("active");
//   titleGame[activeIndex].classList.add("h3-active");
//   textInfo[activeIndex].classList.add("p-active");
// }, 3500);
