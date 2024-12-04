function handleChoice(choice) {
  fetch("http://localhost:8080/response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ choice }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Open a new page with the message from the server
      const newWindow = window.open("", "_blank", "width=800,height=600");
      newWindow.document.write(`
        <html>
          <head>
            <title>Love Letter</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: red;
                color: white;
                padding: 20px;
                text-align: center;
              }
              h1 { font-size: 2.5rem; }
              p { font-size: 1.5rem; line-height: 1.8; }
            </style>
          </head>
          <body>
            <h1>${data.title}</h1>
            <p>${data.message}</p>
          </body>
        </html>
      `);
    })
    .catch((error) => console.error("Error:", error));
}

