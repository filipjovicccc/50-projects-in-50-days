const panels = document.querySelectorAll('.panel') // sve je stavljeno u node listu sa query selector all , pa mozemo da koristimo 

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}

