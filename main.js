let one = document.querySelector("h1");
one.textContent = "Clique ici";

const test = document.getElementById("test");
let hasBeenNonActive = false;

const element = document.querySelector("#one");
element.style.color = "blue";

// Permet de changer la couleur de l'élément "test" via un click sur l'élément "one"
document.querySelector("h1").addEventListener("click", () => {
    if (hasBeenNonActive && test.classList.contains("non_active")) {
        test.classList.remove("non_active");
        test.classList.add("active");
    } else {
        test.classList.remove("active");
        test.classList.add("non_active");
        hasBeenNonActive = true;
    }
});

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let angle = 0;
let isVisible = true;

canvas.width = 500;
canvas.height = 500;
const img = new Image();
img.src = 'images/IIM.png';
img.onload = function() {
  animateElements();
};

const animateElements = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (isVisible) {
        context.beginPath();
        context.arc(250, 250, 50, 0, 2 * Math.PI);
        context.stroke();
        context.drawImage(img, 200, 100, 100, 100);
    }
    angle += 0.1;
    context.save();
    context.translate(250, 250);
    context.rotate(angle);
    context.translate(-250, -250);
    isVisible = !isVisible;
}

const intervalId = setInterval(animateElements, 100);