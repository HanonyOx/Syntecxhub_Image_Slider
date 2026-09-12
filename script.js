const pause = document.querySelector(".btn1")
const start = document.querySelector(".btn2")
const image = document.querySelector(".img-container")
const previous = document.querySelector(".fa-less-than");
const next = document.querySelector(".fa-greater-than");

pause.addEventListener("click", ()=>{
    image.style.animationPlayState = "paused"
})
start.addEventListener("click", ()=>{
    image.style.animationPlayState = "running"
})