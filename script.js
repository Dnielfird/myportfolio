// Terminal Typing Effect Logic
const textToType = "cat danniel_firdaus_cv.txt";
const typingSpeed = 100; // milliseconds per character
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        document.getElementById("typewriter").innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Once typing is done, fade in the rest of the CV
        setTimeout(() => {
            document.getElementById("main-content").style.opacity = 1;
        }, 500);
    }
}

// Start typing effect when page loads
window.onload = () => {
    setTimeout(typeWriter, 800);
};