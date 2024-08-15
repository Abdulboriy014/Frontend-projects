let elBody = document.querySelector("body")
let elWrapper = document.querySelector(".wrapper")
let elBox = document.querySelector(".box")
let burgerDiv = document.querySelector(".burger")
let burgerBox = document.querySelector(".burger-box")
let portfolioBtn1 = document.querySelector(".portfolio-button-1")
let portfolioBtn2 = document.querySelector(".portfolio-button-2")
let portfolioHr1 = document.querySelector(".portfolio-hr-1")
let portfolioHr2 = document.querySelector(".portfolio-hr-2")
let portfolioBoxLeft = document.querySelector(".portfolio-box-left")
let portfolioBoxRight = document.querySelector(".portfolio-box-right")

burgerDiv.addEventListener("click", function(evt) {
  evt.preventDefault()

  elWrapper.classList.add("wrapper-active")
  elBox.classList.add("box-active")
  elBody.classList.add("body-active")
})

burgerBox.addEventListener("click", function(evt) {
  evt.preventDefault()

  elWrapper.classList.remove("wrapper-active")
  elBox.classList.remove("box-active")
  elBody.classList.remove("body-active")
})

elWrapper.addEventListener("click", function(evt) {
  evt.preventDefault()

  elWrapper.classList.remove("wrapper-active")
})

portfolioBtn1.addEventListener("click", function(evt) {
  evt.preventDefault()
  portfolioBtn1.classList.remove("portfolio-button-1-active")
  portfolioBtn2.classList.remove("portfolio-button-2-active")
  portfolioHr1.classList.remove("portfolio-hr-1-active")
  portfolioHr2.classList.remove("portfolio-hr-2-active")
  portfolioBoxLeft.classList.remove("portfolio-box-left-active")
  portfolioBoxRight.classList.remove("portfolio-box-right-active")
})

portfolioBtn2.addEventListener("click", function(evt) {
  evt.preventDefault()
  portfolioBtn1.classList.add("portfolio-button-1-active")
  portfolioBtn2.classList.add("portfolio-button-2-active")
  portfolioHr1.classList.add("portfolio-hr-1-active")
  portfolioHr2.classList.add("portfolio-hr-2-active")
  portfolioBoxLeft.classList.add("portfolio-box-left-active")
  portfolioBoxRight.classList.add("portfolio-box-right-active")
})