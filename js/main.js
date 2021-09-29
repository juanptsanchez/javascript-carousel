// GRAB DOM ELEMENTS
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const pauseBtn = document.querySelector(".pause")
const playBtn = document.querySelector(".play")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
pauseBtn.addEventListener("click", pauseSlide)
playBtn.addEventListener("click", nextSlide)
nextBtn.addEventListener("click", nextSlide)

// UTILITY VARS
let index = 0

// SET INTERVAL
let interval = setInterval(startInterval, 4000)

//FUNCTIONS
function startInterval() {
  index++
  moveCarousel()
}
function resetInterval() {
  clearInterval(interval)
  interval = setInterval(startInterval, 4000)
}
function moveCarousel() {
  if(index > imagesCollection.length -1) {
    index = 0
  } else if (index < 0) {
    index = imagesCollection.length -1
  }
  images.style.transform = `translateX(-${index * 600}px)`
}
function stopCarousel() {
  clearInterval(interval)
}

// NAV BUTTONS
function prevSlide() {
  index--
  resetInterval()
  moveCarousel()
}
function pauseSlide() {
  stopCarousel()
}
function nextSlide() {
  index++
  resetInterval()
  moveCarousel()
}