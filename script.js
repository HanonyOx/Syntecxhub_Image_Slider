const pause = document.querySelector(".btn1")
const start = document.querySelector(".btn2")
const image = document.querySelector(".img-container")
const previous = document.querySelector(".buttn");
const next = document.querySelector(".buttn1");

pause.addEventListener("click", ()=>{
    image.style.animationPlayState = "paused"
})
start.addEventListener("click", ()=>{
     image.style.animation = "gallery 20s linear infinite";
    image.style.animationPlayState = "running"
})
image.addEventListener("click",()=>{
    // image.style.animationPlayState = "paused"
    if (image.style.animationPlayState === "paused") {
    image.style.animationPlayState = "running";
  } else {
    image.style.animationPlayState = "paused";
  }
} )
let rotation = 0
next.addEventListener("click", ()=>{
    // console.log("ELEMENT CLICKED")
    image.style.animation = "none";
    rotation += 45
    image.style.transform = `perspective(1000px) rotateY(${rotation}deg)`
})
previous.addEventListener("click", ()=>{
    // console.log("ELEMENT CLICKED")
   image.style.animation = "none";
    rotation -= 45
    image.style.transform = `perspective(1000px) rotateY(${rotation}deg)`
})