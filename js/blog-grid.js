// 1. BLOG DATA
const blogsData = [
  {
    image: "./images/chair.png",
    category: "Design",
    date: "April 11, 2023",
    title: "Make your website stand out",
    link: "#",
  },
  {
    image: "./images/chair.png",
    category: "Marketing",
    date: "May 15, 2023",
    title: "10 tips to increase conversion",
    link: "#",
  },
  {
    image: "./images/chair.png",
    category: "Development",
    date: "June 02, 2023",
    title: "Webflow for modern designers",
    link: "#",
  },
];

// 2. RENDER LOGIC
function renderBlogs() {
  const blogGrid = document.getElementById("blog-grid");

  if (!blogGrid) return;

  const html = blogsData
    .map(
      (blog) => `
        <div class="blog-card">
            <a href="${blog.link}" class="blog-img-wrapper">
                <img src="${blog.image}" alt="${blog.title}" />
            </a>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="category">${blog.category}</span>
                <span class="date">${blog.date}</span>
              </div>
              <h4>${blog.title}</h4>
              <a href="${blog.link}" class="link-primary">Read more</a>
            </div>
          </div>
    `,
    )
    .join("");

  blogGrid.innerHTML = html;
}

renderBlogs();
