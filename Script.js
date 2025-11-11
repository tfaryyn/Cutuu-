const btn = document.getElementById("startBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  btn.classList.add("hidden");
  message.classList.remove("hidden");
  createHearts();
  setInterval(createHearts, 300);
});

function createHearts() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = Math.random() > 0.5 ? "💖" : "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
