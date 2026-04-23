// 1. PROJECT DATA
const projectsData = [
  {
    image: "./images/furniture.png", // Make sure path is correct
    category: "Design",
    title: "Furniture Shop Design",
    link: "#",
  },
  {
    image: "./images/Business.png",
    category: "SEO",
    title: "SEO for news website",
    link: "#",
  },
  {
    image: "./images/Laptop.png",
    category: "Development",
    title: "Development and strategy",
    link: "#",
  },
];

// 2. RENDER LOGIC
function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");

  if (!projectsGrid) return;

  const html = projectsData
    .map(
      (project) => `
        <a href="${project.link}" class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-bg" />

            <div class="project-info">
                <span class= "project-category">${project.category}</span>
                <h4>${project.title}</h4>
                <span class="learn-more-2">Learn more</span>
            </div>
        </a>
    `,
    )
    .join("");

  projectsGrid.innerHTML = html;
}

renderProjects();
