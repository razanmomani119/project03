const title = document.getElementById("title");

const message = document.querySelector("#message");

const card = document.querySelector(".card");

title.textContent = "Updated Title";

message.textContent = "The text was changed using JavaScript.";

card.style.color = "blue";

card.classList.add("active");