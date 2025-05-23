function scrolltop() {
    let a = window.document;
    a = location.href = '#';
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const projects = [
    {
        title: "Profile-Card Design",
        description: "It is a personal profile-card using HTML and CSS. Where you can get my all social-media links and portfolio link.",
        imageUrl: "images/profile-card.png",
        link: "projects/Profile-card/index.html"
    },
    {
        title: "Netflix UI page",
        description: "It is a UI design of Netflix which is design using HTML,CSS.",
        imageUrl: "images/netflix.png",
        link: "projects/netflix-ui-clone/index.html"
    },
    {
        title: "Landing page",
        description: "It is web template of a website which name is plantE. It is designed using the technologies are HTML,CSS.",
        imageUrl: "images/plante.png",
        link: "projects/plantE-store/index.html"
    },
    {
        title: "QR Code Generator",
        description: "Easily create custom QR codes for URLs, text, contact info, and more.It is designed using HTML,CSS and JavaScript. ",
        imageUrl: "images/qrcode.png",
        link: "projects/qr-code-generator/index.html"
    },
    {
        title: "To-Do List",
        description: "It is a normal to-do list which is design and developing using the technologies are HTML,CSS and JavaScript.",
        imageUrl: "images/todo-list.png",
        link: "projects/To-do-List/index.html"
    },
    {
        title: "Tempreture convertor",
        description: "It is Tempreture Convertor Tool which convert the tempreture like Celcius to Fahrenheit and vice-versa.It is designed using HTML,CSS and JavaScript. ",
        imageUrl: "images/tempr.png",
        link: "projects/temp-convertor/index.html"
    }
];

const projectsContainer = document.getElementById('projects-flex');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" class="project-img">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link" target="_blank">View Live Project</a>
    `;

    projectsContainer.appendChild(projectCard);
});
