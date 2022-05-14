const input = document.querySelector("input[type='text']");
input.focus();

const choices = document.querySelector(".choices");

input.addEventListener("keydown", runChoice);
function runChoice(e) {
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }

  let tags = e.target.value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  choices.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("choice");
    tagEl.innerText = tag;
    choices.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".choice");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

//Kako odradjeno, pravimo spolja posebnu klasu "choice"
//pravimo tagove, iz e.target, value. pa ih splitujemo sa zarezom
//trimujemo sa filterom i mapom, da ne bi bio prazana prostor
//posle forEach dodajemo poseban div, i tu sad prvobitno clasu
//stavljamo innerText sa klasom i na kraju appendujemo child
//poseban div koji smo napravili
