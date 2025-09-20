// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  setTimeout(() => preloader.style.display = "none", 200);

  // Auto-open popup after 3s
  setTimeout(openPopup, 3000);
});

// OFFCANVAS
const offcanvas = document.getElementById("offcanvas");
document.getElementById("openCanvasBtn").addEventListener("click", () => offcanvas.classList.add("active"));
document.getElementById("closeCanvasBtn").addEventListener("click", () => offcanvas.classList.remove("active"));

// POPUP
// Existing popup functions
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

function openPopup() { popup.style.display = "flex"; }
function closePopup() { popup.style.display = "none"; }

document.getElementById("openPopupBtn").addEventListener("click", openPopup);
document.getElementById("openPopupBtnMobile").addEventListener("click", openPopup);
document.getElementById("heroPopupBtn").addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => { if(e.target === popup) closePopup(); });

// --- SweetAlert2 + FormSubmit.co Integration ---
const form = document.getElementById("leadForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent redirect

  // Honeypot spam check
  if(form.website.value !== "") return; 

  const formData = new FormData(form);

  fetch("https://formsubmit.co/bisma1055@gmail.com", { // replace with your FormSubmit email
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if(response.ok) {
      // 🔹 Do NOT add success popup here
      // Your old success script will handle it
      form.reset();
    } else {
      throw new Error("FormSubmit returned an error");
    }
  })
  .catch(error => {
    // ❌ Error popup with "Call Now"
    Swal.fire({
      title: 'Oops!',
      text: 'We could not receive your lead. Please call us directly.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Call Now',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.isConfirmed) {
        // Redirect to phone dialer
        window.location.href = "tel:+916005920087"; // replace with your number
      }
    });
    console.error("Form submission error:", error);
  });
});


// FORM VALIDATION
const leadForm = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

leadForm.addEventListener("submit", function(e){
  e.preventDefault();

  // Honeypot check
  if(document.getElementById("website").value !== ""){
    formMsg.textContent = "Spam detected.";
    formMsg.style.color = "red";
    return;
  }

  const name = this.fullname.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();

  // Regex validations
  const nameValid = /^[a-zA-Z ]{3,}$/.test(name);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^[0-9]{7,15}$/.test(phone);

  if(!nameValid){formMsg.textContent="Enter valid name";formMsg.style.color="red";return;}
  if(!emailValid){formMsg.textContent="Enter valid email";formMsg.style.color="red";return;}
  if(!phoneValid){formMsg.textContent="Enter valid phone";formMsg.style.color="red";return;}

  formMsg.textContent = "Thank you! Our travel expert will contact you soon.";
  formMsg.style.color = "green";
  this.reset();
});

// Attach event to package buttons
document.querySelectorAll(".quote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("popup").style.display = "flex";
  });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let slideWidth;
let slidesToShow;

// Function to update slidesToShow based on screen width
function updateSettings() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 992) {
    slidesToShow = 4; // Desktop
  } else if (screenWidth >= 768) {
    slidesToShow = 2; // Tablet
  } else {
    slidesToShow = 1; // Mobile
  }
  slideWidth = 100 / slidesToShow;
  slides.forEach(slide => slide.style.minWidth = `${slideWidth}%`);
  moveCarousel();
}

// Move Carousel
function moveCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${-index * slideWidth}%)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
  index++;
  if (index > slides.length - slidesToShow) index = 0; // Loop continuously
  moveCarousel();
});

// Prev Button
prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - slidesToShow; // Loop continuously
  moveCarousel();
});

// Autoplay
setInterval(() => {
  index++;
  if (index > slides.length - slidesToShow) index = 0;
  moveCarousel();
}, 3000);

// Update on load and resize
window.addEventListener('resize', updateSettings);
window.addEventListener('load', updateSettings);

const reviewsTrack = document.querySelector('.reviews-track');
const reviewCards = document.querySelectorAll('.review-card');
let reviewIndex = 0;

  function showNextReview() {
    reviewIndex = (reviewIndex + 1) % reviewCards.length;
    reviewsTrack.style.transform = `translateX(${-reviewIndex * 100}%)`;
  }

  setInterval(showNextReview, 2000); // 1.5 seconds per card


 document.addEventListener("DOMContentLoaded", () => {
    const thumbnail = document.getElementById("video-thumbnail");
    const iframeWrapper = document.getElementById("video-iframe");
    const iframe = iframeWrapper.querySelector("iframe");

    thumbnail.addEventListener("click", () => {
      // Autoplay video by appending autoplay=1
      const src = iframe.getAttribute("src");
      if (!src.includes("autoplay=1")) {
        iframe.setAttribute("src", src + (src.includes("?") ? "&" : "?") + "autoplay=1");
      }

      // Hide thumbnail & show iframe
      thumbnail.style.display = "none";
      iframeWrapper.style.display = "block";
    });
  });
  

  // SweetAlert2 library

   document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Honeypot spam check
  if (document.getElementById("website").value !== "") {
    return; // Bot detected, do nothing
  }

  // Get form values
  const name = this.fullname.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const packageCategory = this.package.value;

  // Extra validation for phone number
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(phone)) {
    Swal.fire({
      title: "Invalid Phone",
      text: "Please enter a valid phone number (10–12 digits).",
      icon: "error",
      confirmButtonText: "OK"
    });
    return;
  }

  // ✅ Immediately close popup before showing alert
  closePopup();

  // Success popup
  Swal.fire({
    title: "Thank You, " + name + "!",
    text: "Your request for the " + packageCategory + " package has been received. We will contact you shortly.",
    icon: "success",
    confirmButtonText: "Great!"
  }).then(() => {
    // Reset form after success
    document.getElementById("leadForm").reset();
  });
});


// SweetAlert2 For Contact Us Section


document.addEventListener("DOMContentLoaded", function() { 
  document.querySelectorAll(".leadForm").forEach((form) => {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // ✅ Block page reload

      // Honeypot spam check
      if (this.website.value !== "") return;

      // Get form values
      const name = this.fullname.value.trim();
      const phone = this.phone.value.trim();
      const packageCategory = this.package.options[this.package.selectedIndex].text;

      // Phone validation
      const phoneRegex = /^\d{10,12}$/;
      if (!phoneRegex.test(phone)) {
        Swal.fire("Invalid Phone", "Please enter a valid phone number (10–12 digits).", "error");
        return;
      }

      // Prepare form data
      const formData = new FormData(form);

      // Submit to FormSubmit.co
      fetch("https://formsubmit.co/bisma1055@gmail.com", { // replace with your email
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
      .then(response => {
        if (response.ok) {
          // ✅ Success popup (dynamic message)
          Swal.fire({
            title: `Thank You, ${name}!`,
            text: `Your request for the ${packageCategory} has been received.`,
            icon: "success",
            confirmButtonText: "Great!"
          }).then(() => {
            form.reset();
          });
        } else {
          throw new Error("FormSubmit server error");
        }
      })
      .catch(error => {
        // ❌ Error popup with "Call Now" option
        Swal.fire({
          title: "Oops!",
          text: "We could not receive your lead. Please call us directly.",
          icon: "error",
          showCancelButton: true,
          confirmButtonText: "Call Now",
          cancelButtonText: "Cancel"
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to phone dialer
            window.location.href = "tel:+916005920087"; // replace with your number
          }
        });
        console.error("Form submission error:", error);
      });
    });
  });
});





  




  

    
  

  

  






