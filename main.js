const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")
const list = document.querySelectorAll('li')
hamburger.addEventListener('click', () => {
    navbar.classList.toggle("show-nav");
    hamburger.classList.toggle("toggle");
    list.forEach((element, index) => {
        if(element.style.animation){
            element.style.animation = ""
        }
        else{
            element.style.animation = `fade 0.5s ease-out forwards ${index / 7 + 0.3}s`
        }
    });
})