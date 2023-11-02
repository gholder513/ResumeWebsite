const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 180;

const currentFrame = (index) => `./images/${(index + 1).toString()}.jpg`

const images = [];
let ball = { frame : 0 }

for(let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = currentFrame(i);
images.push(img);
}

gsap.to(ball, {
    frame: frameCount - 1, 
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "1000%",
    }, 
    onUpdate: render,
});






gsap.fromTo(".resume-intro", {opacity: 0}, {opacity: 1,
scrollTrigger: {
    scrub: true,
    start: "1%",
    end: "10%",
},
onComplete: () => {
    gsap.to(".resume-intro", {opacity: 0})
},
})

images[0].onload = render;

function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}

function renderStillFrame() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}