// 1. PROJECT DATA
const projectsData = [
  {
    image: "./images/furniture.png",
    category: "Design",
    title: "Furniture Shop Design",
    link: "./portfolio-detail.html",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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
  {
    image: "./images/furniture.png",
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

// 2. STATE MANAGEMENT
let visibleCount = 9; // How many to show initially
const increment = 9; // How many to add each time

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");

  if (!projectsGrid) return;

  // Slice the array to only get the first 'visibleCount' items
  const visibleProjects = projectsData.slice(0, visibleCount);

  const html = visibleProjects
    .map(
      (project) => `
        <a href="${project.link}" class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-bg" />
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h4>${project.title}</h4>
                <span class="learn-more-2">Learn more</span>
            </div>
        </a>
    `,
    )
    .join("");

  projectsGrid.innerHTML = html;

  // 3. HIDE BUTTON IF NO MORE PROJECTS
  if (visibleCount >= projectsData.length) {
    loadMoreBtn.style.display = "none";
  }
}

// 4. EVENT LISTENER FOR BUTTON
document.getElementById("load-more-btn").addEventListener("click", function () {
  visibleCount += increment; // Increase the count
  renderProjects(); // Re-render
});

// Initial Render
renderProjects();
