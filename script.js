// Smooth Scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    targetEl.scrollIntoView({ behavior: "smooth" });
  });
});

// Typing effect on home section
const phrases = ["Data Analyst", "Database Developer", "Front-End Learner"];
let i = 0, j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loopTyping() {
  const typingEl = document.getElementById("typing");
  typingEl.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i >= phrases.length) i = 0;
    }
  }

  const speed = isEnd ? 120 : isDeleting ? 50 : 100;
  setTimeout(loopTyping, speed);
}

document.addEventListener("DOMContentLoaded", loopTyping);
