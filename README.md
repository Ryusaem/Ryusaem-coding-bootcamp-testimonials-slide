# Frontend Mentor - Coding bootcamp testimonials slider

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)
![Coding bootcamp challenge=](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this testimonial slider and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Screenshot Project](/design/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ryusaem/Ryusaem-coding-bootcamp-testimonials-slide)
- Live Site URL: [Github Live Demo](https://ryusaem.github.io/Ryusaem-coding-bootcamp-testimonials-slide/)

## My process

Total:

    - design/wireframe: 10 min
    - coding/implementation: 360 min (6 hours)
    - documentation/README.md: 30 min
    - total: ~400 minutes (6h30)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

1. This project was out of my league, and was very hard on me because I have no experience on playing with image, and setting them up the way I want. So in this project, I learned a ton about the "position" property, which will be so beneficial for me in the near future.
   The biggest lesson, is that on each big container (Testimonial-image, testimonial-text) we have to give them the property of "position: relative". We do that because we want to set every item inside of the big container based on their parent which possess the "position: relative". This way we allow the little item to move based on their parent container.
   Of course there is still a lot to learn, and I think there is so much more to know, but for that, I'll need to practice more on project similar to this one, one that pushed us to play with image display.

```css
/* Big Container */
.testimonial-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Big Container */
.testimonial-text {
  position: relative;
  z-index: 2;
}

/* Child of Big container */
.testimonial-image .pattern-bg {
  position: absolute;
  bottom: 0;
  z-index: 1;
}

/* Child of big container */
.testimonial-button {
  position: absolute;
  z-index: 3;
}
```

2. I see the structure of the HTML as 1 big container that contain the text and the image.
   Learning how to set up the structure of the website is crucial for a web developper and the more we are playing with it, the more we'll become stronger.
   Try to spend as much time as possible on making the structure of your website, because all the logic will come from here.
   My advice is that do it on a paper with a pen, and draw how you wish to set up everyting

   ```html
   <div class="testimonial-container">
     <div class="testimonial-image">
       <!-- Pattern background + Avatar Image + Button Container-->
     </div>

     <div class="testimonial-text">
       <!-- Pattern Quotes image + Description + Name + Job -->
     </div>
   </div>

   <footer class="footer">
     <!-- Attribution + Signature + Pattern Curve BG -->
   </footer>
   ```

3. I learned to build my own json while working on the project. I wanted to create a way to write all the comment, image, and so on, on a document, and use it dynamically to set up data.
   All the data are in a list "[ ]".
   Inside the list, one object "{ }" represent one data.
   The data possess few property with few value.
   To access a data we have to use the fetch function, and use the "data" to speak with the document.
   For example, to get the value of "path", we would use: data[index].path
   It's like accessing data on an Object in JS, similar thing.

```json
[
  {
    "property": "value",
    "property": "value",
    "property": "value",
    "path": "images/image.jpg"
  },
  {
    "property": "value",
    "property": "value",
    "property": "value",
    "path": "images/image.jpg"
  },
  {
    "property": "value",
    "property": "value",
    "property": "value",
    "path": "images/image.jpg"
  }
]
```

4. To find a dynamic way to access data via javascript, I set up a way to do that all based on an index called "currentIndex" iniatialize to 0.
   Of course, to get the data, I used the fetch function. First we get the response, and then the data.
   Based on the index, and based on each click on the button from user, we could change the "descreption", the "name", the "job" and the "avatar" dynamically thanks to the "currentIndex" variable.
   If a user click on "previous button", we had to find a way to not use negative number. So my first idea was to use the "%" modulo operator to loop through the data.length. So if the current index is 0, then we will set the "currentIndex" to "data.length - 1". If it's not 0, then we set the "currentIndex" to "currentIndex - 1". I got lucky on this one, I guess, or maybe not, because it's not my first time playing with that awesome feature
   ```js
   currentIndex =
     (currentIndex == 0 ? data.length - 1 : currentIndex - 1) % data.length;
   ```
   If a user click on next, it was easier to write that because I only need to add 1 to the "currentIndex" modulos "%" by the data.length. And with that, this was the only logic that this project needed.
   ```js
   currentIndex = (currentIndex + 1) % data.length;
   ```

```js
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
```

### Continued development

- Improve my understanding of the property "position".
- Play with more project that ask to interact with image and setting them up in a weird way like this project.
- Playing more with property of "flex: 1", "flex-grow" and "flex-shrink"

### Useful resources -

[Frontend Mentor](https://www.frontendmentor.io/challenges/) - Formidable resources to make you learn by "doing" awesome project. Highly recommend it.

## Author -

- Github - [@Ryusaem](https://github.com/Ryusaem) -
- Linkedin - [@sambath-meas](https://www.linkedin.com/in/sambath-meas)
- Coursera - [@sambath-meas](https://www.coursera.org/learner/sambath-meas)
- Twitter - [@RyuBraveheart](https://twitter.com/RyuBraveheart) - - - Frontend Mentor - [@Ryusaem](https://www.frontendmentor.io/profile/Ryusaem)
- CodeWars - [@Ryusaem](https://www.codewars.com/users/Ryusaem)

```

```
