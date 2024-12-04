function redirectToMessage() {
  document.body.innerHTML = `
    <div class="hearts"></div>
    <div class="container">
      <h1>Hey gorgeous,</h1>
      <p>Every moment with you, Vaishu Putta, is a treasure.  
      From the silly arguments to the quiet times, the laughter to the tears, it's all been perfect because it's been with you.  
      You're not just my love; you're my answered prayer, my everything.</p>
      <p>I love you more than words can ever say. Wanna know the secret about Likshu?  
      It’s that he’s the luckiest guy alive because of you. ❤️</p>
      <footer>
        <p>Love forever, <strong>Liku</strong></p>
      </footer>
    </div>
  `;
}

function moveNoButton() {
  const noButton = document.querySelector('.no-btn');
  const randomX = Math.random() * window.innerWidth - 100;
  const randomY = Math.random() * window.innerHeight - 50;
  noButton.style.position = 'absolute';
  noButton.style.top = `${randomY}px`;
  noButton.style.left = `${randomX}px`;
}
