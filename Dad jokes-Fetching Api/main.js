const url = "https://icanhazdadjoke.com/";

const btn = document.getElementById("btn");

const jokes = document.getElementById("for-jokes"); // lekcija za danas gore uvek const pocinjati, posle uvek moze da se uppotrebi u funkciji

btn.addEventListener("click", fetchData);

async function fetchData() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(url, config);
  const data = await response.json();

  jokes.innerHTML = data.joke;
}

fetchData();
