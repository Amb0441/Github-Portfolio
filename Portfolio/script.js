const roles = ["Student", "SAP Major", "Developer"];
let roleIndex = 0;
let charIndex = 0;
let typing = true;
const typedText = document.getElementById("typed-text");

function typeRole() {
    const currentRole = roles[roleIndex];
    if (typing) {
        if (charIndex < currentRole.length) {
            typedText.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 90);
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else {
        if (charIndex > 0) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 40);
        } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 400);
        }
    }
}
typeRole();

// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.onclick = () => {
    navLinks.classList.toggle('open');
  };
}