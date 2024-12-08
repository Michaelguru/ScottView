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