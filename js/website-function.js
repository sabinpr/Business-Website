window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function goToIndex() {
  window.location.href = "index.html";
}

const goToContact = () => {
  window.location.href = "contact.html";
};
