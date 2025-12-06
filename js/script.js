// UI Logic (Theme, Mobile Menu, Typewriter)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-link");

// ... (Keep existing UI Logic for Theme/Menu here) ...
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  icon.classList.replace("ph-moon", "ph-sun");
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("ph-moon", "ph-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("ph-sun", "ph-moon");
    localStorage.setItem("theme", "light");
  }
});
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Typewriter
const textElement = document.getElementById("typewriter");
const words = ["Java Developer", "Full Stack Developer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  let typeSpeed = isDeleting ? 80 : 150;
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }
  setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// --- DYNAMIC PROJECT LOADER (PROJECTS PAGE — SHOW ALL) ---
async function loadAllProjects() {
  const container = document.getElementById("all-projects-container");
  if (!container) return; // Prevent error on index.html

  try {
    const response = await fetch("/projects.json");
    const projects = await response.json();

    container.innerHTML = "";

    projects.forEach((project) => {
      const skillsHtml = project.skills
        .map((skill) => `<span class="tech-pill">${skill}</span>`)
        .join("");

      const card = `
        <div class="project-card">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech-stack">${skillsHtml}</div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="link-btn demo-btn"><i class="ph ph-link"></i> Live Demo</a>
                    <a href="${project.githubLink}" target="_blank" class="link-btn github-btn"><i class="ph ph-github-logo"></i> Source</a>
                </div>
            </div>
        </div>
      `;

      container.innerHTML += card;
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p style='color:red;'>Failed to load projects.</p>";
  }
}

async function loadFeaturedProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    const featured = projects.slice(0, 3);

    featured.forEach(project => {
      const skillsHtml = project.skills
        .map(skill => `<span class="tech-pill">${skill}</span>`)
        .join("");

      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="project-card">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech-stack">${skillsHtml}</div>
                <div class="project-links">
                    <a href="${project.liveLink}"  target="_blank" class="link-btn demo-btn"><i class="ph ph-link"></i> Live Demo</a>
                    <a href="${project.githubLink}" target="_blank" class="link-btn github-btn"><i class="ph ph-github-logo"></i> Source</a>
                </div>
            </div>
        </div>`
      );
    });
  } catch (e) {
    console.error(e);
  }
}


loadFeaturedProjects(); 
loadAllProjects();
