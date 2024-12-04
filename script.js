function showLoveLetter(option) {
  let message = "";
  if (option === "yes" || option === "ofCourse") {
    message = `
      <h1>Every Moment with You, Vaishu ❤️</h1>
      <p>Every moment with you, Vaishu Putta, is a treasure. From the silly arguments to the quiet times, 
      the laughter to the tears, it's all been perfect because it's been with you. You're not just my love; 
      you're my answered prayer, my everything. Wanna know the secret about Likshu? It’s that he’s the 
      luckiest guy alive because of you.</p>
    `;
  }

  // Create a new page with the love letter
  const loveLetterWindow = window.open("", "_blank", "width=800,height=600");
  loveLetterWindow.document.write(`
    <html>
      <head>
        <title>Love Letter</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: red; color: white; padding: 20px; text-align: center; }
          h1 { font-size: 2.5rem; }
          p { font-size: 1.5rem; line-height: 1.8; }
        </style>
      </head>
      <body>
        ${message}
      </body>
    </html>
  `);
  loveLetterWindow.document.close();
}
