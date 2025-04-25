const barra = document.querySelector('.check');
const spa = document.querySelector('.es');
const en = document.querySelector('.en');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .nav-links a");

function changedcolor() {
    if (barra.checked) {
        spa.style.color = '#FFFFFF';     
        en.style.color = '#00a1ff';    
    } else {
        spa.style.color = '#00a1ff';   
        en.style.color = '#FFFFFF';       
    }
}

//inicializar el color al inicio
changedcolor();

//realizar el cambio de color
barra.addEventListener('change', changedcolor);

window.addEventListener("scroll", () => {
let current = "";

sections.forEach((section) => {
    const sectionTop = section.offsetTop - 110;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
    }
});

navLinks.forEach((link) => {
    link.classList.remove("selected");
    if (link.getAttribute("href") === "#" + current) {
        link.classList.add("selected");
    }
    });
});
