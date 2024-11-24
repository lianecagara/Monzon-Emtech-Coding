
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); /
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const backToTopButton = document.getElementById('backToTop');


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show');  
    } else {
        backToTopButton.classList.remove('show');  
    }
});


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; 
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

   
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } 
    slides[slideIndex - 1].classList.add("active"); 

    setTimeout(showSlides, 3000); 
}


showSlides();
