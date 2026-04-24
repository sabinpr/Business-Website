document.addEventListener("DOMContentLoaded", function () {
  const testimonialData = [
    {
      image: "./images/avatar.png",
      quote:
        "Wasif has been a great consultant. He took the time and make the effort to understand our business. Wasif’s advice is tailored and practical, demonstrating his vast experience in various industries. Really appreciate the positive impact he’s contributed to our business!",
      name: "Sam Halcrow",
      position: "General Manager, Studio Hawk",
    },
    {
      image: "./images/avatar.png",
      quote:
        "Wasif has been a great consultant. He took the time and make the effort to understand our business. Wasif’s advice is tailored and practical, demonstrating his vast experience in various industries. Really appreciate the positive impact he’s contributed to our business!",
      name: "Jane Doe",
      position: "CEO, Tech Solutions",
    },
    {
      image: "./images/avatar.png",
      quote:
        "Wasif has been a great consultant. He took the time and make the effort to understand our business. Wasif’s advice is tailored and practical, demonstrating his vast experience in various industries. Really appreciate the positive impact he’s contributed to our business!",
      name: "John Smith",
      position: "Founder, Creative Agency",
    },
    {
      image: "./images/avatar.png",
      quote:
        "Wasif has been a great consultant. He took the time and make the effort to understand our business. Wasif’s advice is tailored and practical, demonstrating his vast experience in various industries. Really appreciate the positive impact he’s contributed to our business!",
      name: "Jon Bonjovi",
      position: "Founder, Bon Jovi",
    },
  ];

  const listContainer = document.getElementById("js-testi-container");

  if (listContainer) {
    listContainer.innerHTML = testimonialData
      .map((item) => {
        return `
          <li class="splide__slide">
              <div class="testimonial-content">
                  <img src="${item.image}" alt="${item.name}" class="user-img" />                 
                    <span class="quote-icon">“</span>
                    <p>${item.quote}</p>
                  <span class="testimonial-author highlight">${item.name}</span>
                  <span class="author-position highlight">${item.position}</span>
              </div>
          </li>
        `;
      })
      .join(""); // This ensures no commas are rendered between slides

    // Initialize Splide
    new Splide("#testimonial-slider", {
      type: "slide", // Change 'loop' to 'slide'
      rewind: false, // Ensure it doesn't jump back to start automatically
      perPage: 1,
      pagination: false,
      arrows: true,
    }).mount();
  }
});
