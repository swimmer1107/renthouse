
document.addEventListener('DOMContentLoaded', function () {
  // Booking Modal
  const modal = document.getElementById('bookingModal');
  const openBtn = document.getElementById('toggleBookingBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  if (openBtn) {
    openBtn.addEventListener('click', () => modal.style.display = 'block');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      alert(`Thank you, ${data.name}! Your booking request for "${data.property}" on ${data.movein} has been received. We will contact you at ${data.email}.`);
      bookingForm.reset();
      modal.style.display = 'none';
    });
  }

  // Search
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const location = card.querySelectorAll("p")[1]?.textContent.toLowerCase();
        card.style.display = (title.includes(searchTerm) || location.includes(searchTerm)) ? "block" : "none";
      });
    });
  }

  // Home link alert
  const homeLink = document.getElementById('homeLink');
  if (homeLink) {
    homeLink.addEventListener('click', function (e) {
      const currentHash = window.location.hash;
      if (currentHash === '#home' || currentHash === '') {
        e.preventDefault();
        alert("You are already on the Home page.");
      }
    });
  }

  // Modals: Login and Signup
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const loginLink = document.getElementById('loginLink');
  const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
  const openSignupLink = document.getElementById('openSignupLink');
  const closeSignupModalBtn = document.getElementById('closeSignupModalBtn');

  if (loginLink) {
    loginLink.addEventListener('click', function (e) {
      e.preventDefault();
      signupModal.style.display = 'none';
      loginModal.style.display = 'block';
    });
  }

  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', () => loginModal.style.display = 'none');
  }

  if (openSignupLink) {
    openSignupLink.addEventListener('click', function (e) {
      e.preventDefault();
      loginModal.style.display = 'none';
      signupModal.style.display = 'block';
    });
  }

  if (closeSignupModalBtn) {
    closeSignupModalBtn.addEventListener('click', () => signupModal.style.display = 'none');
  }

  window.addEventListener('click', function (e) {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === signupModal) signupModal.style.display = 'none';
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      localStorage.setItem("isLoggedIn", "true");
      loginModal.style.display = 'none';
      showPopup(`Login successful! Welcome ${email}`);
      loginForm.reset();
      updateLoginLink(); // You must define this function somewhere
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = signupForm.signupName.value;
      const email = signupForm.signupEmail.value;
      alert(`Thanks, ${name}! Your account has been created using ${email}.`);
      signupForm.reset();
      signupModal.style.display = 'none';
    });
  }

  // Load Properties via Fetch
  const propertiesLink = document.getElementById("loadPropertiesLink");
  const propertiesSection = document.getElementById("propertiesSection");

  if (propertiesLink && propertiesSection) {
    propertiesLink.addEventListener("click", function (e) {
      e.preventDefault();
      fetch("/HTML/properties-content.html")
        .then((response) => response.text())
        .then((html) => {
          propertiesSection.innerHTML = html;
          window.scrollTo({ top: propertiesSection.offsetTop, behavior: "smooth" });
        })
        .catch((error) => console.error("Error loading properties:", error));
    });
  }

  // Show popup function
  function showPopup(message) {
    const popup = document.getElementById("popupMessage");
    if (popup) {
      popup.textContent = message;
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    }
  }

  // Dummy updateLoginLink function
  function updateLoginLink() {
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
      loginLink.textContent = "Logged in";
      loginLink.removeAttribute('href');
    }
  }
});

