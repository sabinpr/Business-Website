// 1. Your JSON Data
const servicesData = [
  {
    icon: "fas fa-briefcase",
    title: "Online Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-users",
    title: "Human Resource",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-chart-line",
    title: "Market Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Business Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-tasks",
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-wallet",
    title: "Money Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-bullhorn",
    title: "Online Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Business Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "./services-detail.html",
  },
];

// --- FUNCTION 1: Renders ALL services ---
const renderServices = () => {
  const servicesGrid = document.getElementById("services-grid");

  // SAFETY CHECK: If this ID isn't on the page, don't run the rest of this function
  if (!servicesGrid) return;

  const serviceCardsHTML = servicesData
    .map(
      (service) => `
        <a href="${service.link}" class="service-card">
            <div class="icon-box"><i class="${service.icon}"></i></div>
            <h5>${service.title}</h5>
            <p class="p-2">${service.description}</p>
            <span class="highlight learn-more">Learn more</span>
        </a>
    `,
    )
    .join("");

  servicesGrid.innerHTML = serviceCardsHTML;
};

// --- FUNCTION 2: Renders 4 RANDOM services ---
const renderServicesDetail = () => {
  const servicesDetailGrid = document.getElementById("services-detail-grid");

  // SAFETY CHECK: If this ID isn't on the page, don't run
  if (!servicesDetailGrid) return;

  const randomServices = [...servicesData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const serviceDetailCardsHTML = randomServices
    .map(
      (service) => `
        <a href="${service.link}" class="service-card">
            <div class="icon-box"><i class="${service.icon}"></i></div>
            <h5>${service.title}</h5>
            <p class="p-2">${service.description}</p>
            <span class="highlight learn-more">Learn more</span>
        </a>
    `,
    )
    .join("");

  servicesDetailGrid.innerHTML = serviceDetailCardsHTML;
};

// --- RUN BOTH ---
renderServices();
renderServicesDetail();
