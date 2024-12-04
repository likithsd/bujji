function redirectToLetter() {
  document.body.innerHTML = `
    <div class="hearts"></div>
    <h1>Hey gorgeous, you just made my day!</h1>
    <p>Now let me make yours, my bujjikandamma. I can't wait to take you on this special evening.</p>
    <footer>
      <p>Love, <span style="font-weight: bold;">Liku</span></p>
    </footer>
  `;
}

function moveNoButton() {
  const noButton = document.querySelector('.no-btn');
  const randomX = Math.random() * window.innerWidth - 100;
  const randomY = Math.random() * window.innerHeight - 50;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
