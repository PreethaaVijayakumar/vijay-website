document.querySelectorAll(".card").forEach(card => {

card.addEventListener("mouseover", () => {
card.style.background = "#2563EB";
card.style.color = "white";
})

card.addEventListener("mouseout", () => {
card.style.background = "white";
card.style.color = "black";
})

})
