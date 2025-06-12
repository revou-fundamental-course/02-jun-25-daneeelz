// Welcome Modal Functionality
const welcomeModal = document.getElementById('welcomeModal');
const userNameInput = document.getElementById('userName');
const submitNameBtn = document.getElementById('submitName');
const welcomeText = document.getElementById('welcome-text');

// Show modal on page load
window.onload = function() {
  welcomeModal.style.display = 'flex';
};

// Handle name submission
submitNameBtn.addEventListener('click', function() {
  const userName = userNameInput.value.trim();
  if (userName) {
    welcomeModal.style.display = 'none';
    welcomeText.textContent = `Hi ${userName}! Welcome to PrimeGym`;
    // Store name in localStorage to persist across page refreshes
    localStorage.setItem('userName', userName);
  } else {
    alert('Please enter your name');
  }
});

// Check if name exists in localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    welcomeModal.style.display = 'none';
    welcomeText.textContent = `Hi ${storedName}! Welcome to PrimeGym`;
  }
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Auto-advance slides every 5 seconds
setInterval(function() {
  plusSlides(1);
}, 5000);

// Form submission
const form = document.getElementById('contactForm');
const summaryDiv = document.getElementById('summary');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  // Format date for display
  const formattedDate = new Date(dob).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  summaryDiv.innerHTML = `
    <h3>Thank you for your message, ${name}!</h3>
    <div class="summary-item">
      <span class="summary-label">Date of Birth:</span>
      <span class="summary-value">${formattedDate}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Gender:</span>
      <span class="summary-value">${gender}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Your Message:</span>
      <span class="summary-value">${message}</span>
    </div>
    <p class="summary-note">We'll get back to you soon!</p>
  `;
  
  // Clear form
  form.reset();
});