// Create Floating Hearts
function createHearts() {
  const heartsContainer = document.querySelector(".hearts");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s"; // Random speed for each heart
    heartsContainer.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

createHearts();
setInterval(createHearts, 3000); // Create new hearts every 3 seconds

// Show Love Letter on Button Click
function showLoveLetter() {
  alert(
    "Every moment with you, Vaishu Putta, is a treasure. From the silly arguments to the quiet times, the laughter to the tears, it's all been perfect because it's been with you. You're not just my love; you're my answered prayer, my everything. I love you more than words can ever say. Wanna know the secret about Likshu? It’s that he’s the luckiest guy alive because of you."
  );
}

// Move "No" Button
function moveNoButton() {
  const noButton = document.querySelector(".no-btn");
  noButton.style.position = "absolute";
  noButton.style.top = Math.random() * 80 + "vh";
  noButton.style.left = Math.random() * 80 + "vw";
}
