let btn = document.querySelectorAll(".faq-toggle");
console.log(btn);
btn.forEach((element) =>
  element.addEventListener("click", () => {
    element.parentNode.classList.toggle("active");   //classList.toggle metod zapamtiti iz ovog projekta
  })
);
