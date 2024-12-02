const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility and hamburger transformation
hamburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click from propagating to the document
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close the menu when clicking anywhere outside the navbar
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close the menu if a link inside the navbar is clicked
navLinks.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}) // No looping
  .add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i + 1)
  })
  .add({
    targets: '.ml11',
    opacity: 1, // Keep the text visible
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// Removed the fade-out step

//load more button
const loadMoreButton = document.getElementById("loadMore");
const hiddenItems = document.querySelectorAll(".card.hidden");
let visibleCount = 0;
const itemsToShow = 3;

loadMoreButton.addEventListener("click", () => {
  for (let i = visibleCount; i < visibleCount + itemsToShow; i++) {
    if (hiddenItems[i]) {
      hiddenItems[i].style.display = "block";
      setTimeout(() => {
        hiddenItems[i].classList.remove("hidden");
      }, 50);
    }
  }

  visibleCount += itemsToShow;

  if (visibleCount >= hiddenItems.length) {
    loadMoreButton.style.display = "none";
  }
});

// Get the modal
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
var img = images[i];
// and attach our click listener for this image.
img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
modal.style.display = "none";   
}


//see more text
function toggleContent(button) {
  // Find the parent card of the clicked button
  const card = button.closest('.card');

  // Find the text container inside the specific card
  const text = card.querySelector('.see-more-text');

  // Toggle expanded class
  if (text.classList.contains('expanded')) {
    text.classList.remove('expanded');
    button.textContent = 'See More'; // Update button text
  } else {
    text.classList.add('expanded');
    button.textContent = 'See Less'; // Update button text
  }
}


