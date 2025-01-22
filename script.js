const structuredData = {
    "@context": "https://schema.org",
    "type": "Portfolio",
    "name": "Scottviewdev, Scott View",
    "url": "https://scottviewdev.com.ng",
    "logo": "https://wrapstar.com.ng/images/ScottViewDev logo.jpg"
};

const scriptTag = document.createElement("script");
scriptTag.type = "application/ld+json";
scriptTag.textContent = JSON.stringify(structuredData);

document.head.appendChild(scriptTag);




function toggle(){
    const elements = document.querySelectorAll(".upper-links")
    elements.forEach(element => {
        element.style.display = 'block';
    });
    document.getElementById("show").style.display = 'none';
    document.getElementById("cancel").style.display = 'block';
}
function cancelToggle(){
    const elements = document.querySelectorAll(".upper-links")
    elements.forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById("show").style.display = 'block';
    document.getElementById("cancel").style.display = 'none';
}




document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});



// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check and apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add event listener to toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  

  // Save the theme preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent= "Light Mode";
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent= "Dark Mode";
    
  }
});

const texts = ["- A Front-End Developer", "- A Graphics-Designer", "- A Web-Designer"];
let index = 0;

function typeEffect() {
    const element = document.getElementById("animatedText");
    const currentText = texts[index];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        element.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length){
            clearInterval(typingInterval);
            setTimeout(clearEffect, 2000);
        }
    }, 100);

    function clearEffect(){
        const clearingInterval = setInterval(() => {
            element.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                clearInterval(clearingInterval);
                index = (index + 1) % texts.length;
                setTimeout(typeEffect, 1000);
            }
        }, 50)
    }
}

typeEffect();

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

// Optional: Auto-change slides
setInterval(() => {
  changeSlide(1);
}, 6500);