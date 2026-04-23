// 1. YOUR DATA
const logosData = [
  { name: "Airbnb", image: "./images/company-tag/airbnb.png" },
  { name: "Uber", image: "./images/company-tag/uber.png" },
  { name: "Nike", image: "./images/company-tag/nike.png" },
  { name: "Stripe", image: "./images/company-tag/stripe.png" },
  { name: "Star", image: "./images/company-tag/star.png" },
  { name: "Cloud", image: "./images/company-tag/cloud.png" },
];

// 2. THE LOGIC
function renderLogos() {
  const logoContainer = document.getElementById("logo-container");

  // Check if container exists to prevent errors
  if (!logoContainer) return;

  // Create the HTML string
  const html = logosData
    .map(
      (logo) => `
      
        <img src="${logo.image}" alt="${logo.name}" class="company-logo" />
      
      `,
    )
    .join("");

  // Inject into the page
  logoContainer.innerHTML = html;
}

// Run the function when the script loads
renderLogos();
