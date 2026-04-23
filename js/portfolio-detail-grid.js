// 1. Your Data Array
const portfolioCards = [
  {
    image: "./images/lounge.png",
    title: "Sales Increase",
    link: "#",
  },
  {
    image: "./images/vr.png",
    title: "Business Strategy",
    link: "#",
  },
  {
    image: "./images/meeting.png",
    title: "Market Research",
    link: "#",
  },
  {
    image: "./images/lounge.png",
    title: "Sales Increase",
    link: "#",
  },
];

// 2. The Render Function
const renderPortfolioGrid = () => {
  // Select the container using your specific class name
  const gridContainer = document.querySelector(".portfoilo-grid");

  // Safety check: only run if the element exists on this page
  if (!gridContainer) return;

  // Map the data into the HTML structure you provided
  const htmlContent = portfolioCards
    .map((item) => {
      return `
      <a href="${item.link}" class="grid-card">
        <img src="${item.image}" alt="${item.title}" />
        <div class="card-overlay">
          <h3>${item.title}</h3>
        </div>
      </a>
    `;
    })
    .join("");

  // Inject the HTML into the grid
  gridContainer.innerHTML = htmlContent;
};

// 3. Run the function
renderPortfolioGrid();
