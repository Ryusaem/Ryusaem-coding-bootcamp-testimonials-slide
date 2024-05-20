// Button: #prev-button, #next-button
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

const content = document.querySelector(".testimonial-container");

const description = document.querySelector(".description");
const testimonialAuthor = document.querySelector(".testimonial-author");
const imageAvatar = document.querySelector(".avatar");

async function fetchData() {
  const response = await fetch("testimonial.json");
  const data = await response.json();

  let currentIndex = 0;

  function renderTestimonial(index) {
    // change the content of the <p>"description"
    description.textContent = data[index].description;

    // change the content of the <p>"testimonial-author"
    testimonialAuthor.innerHTML = `${data[index].name} <span>${data[index].job}</span>`;

    // change the content of the <img>"avatar"
    imageAvatar.src = data[index].avatar;
  }

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex == 0 ? data.length - 1 : currentIndex - 1) % data.length;

    renderTestimonial(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % data.length;

    renderTestimonial(currentIndex);
  });

  // Initial render
  renderTestimonial(currentIndex);
}

fetchData();
