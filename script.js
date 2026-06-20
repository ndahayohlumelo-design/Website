
const textArray = [
    "Business Analyst",
    "Data Analyst",
    "IT Graduate"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing-text");

    if (!isDeleting && charIndex <= textArray[index].length) {
        currentText = textArray[index].substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        currentText = textArray[index].substring(0, charIndex);
        charIndex--;
    }

    typingElement.textContent = currentText;

    if (charIndex === textArray[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
// FADE IN EFFECT
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }
});

document.addEventListener("DOMContentLoaded", function () {

    typeEffect();

    const aboutSection = document.querySelector('.about');

    window.addEventListener('scroll', () => {
        if (!aboutSection) return;

        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.style.opacity = "1";
            aboutSection.style.transform = "translateY(0)";
        }
    });

});
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / height) * 100;

    document.querySelector('.scroll-bar').style.width = progress + "%";
});
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrollY = window.scrollY;

    hero.style.transform = `translateY(${scrollY * 0.3}px)`;
});
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            rotateX(${-(y - rect.height / 2) / 10}deg)
            rotateY(${(x - rect.width / 2) / 10}deg)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.3;

        if (position < screen) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    typeEffect();


});