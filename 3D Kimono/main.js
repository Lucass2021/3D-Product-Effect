//Starts//

const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info   h3");
const sizes = document.querySelector(".sizes");
const circle = document.querySelector(".circle");


//Animation//
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In//
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(100px) ";
    purchase.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    circle.style.transform = "translateZ(50px) rotateZ(-360deg)";

});

//Animate Out//
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px) rotateZ(0deg)";
});

