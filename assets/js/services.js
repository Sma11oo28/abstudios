let cards = document.querySelectorAll(".services-card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle -= 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

rotateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.3;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-1 * (topVal / distance + 1));

    cards.forEach((card, i) => {
        if (i <= index) {
            card.classList.add("away");
        } else {
            card.classList.remove("away");
        }
    });

    rotateCards();
});
