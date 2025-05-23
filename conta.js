document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const loginLink = document.getElementById("loginLink");
  const closeLoginBtn = document.getElementById("closeLoginModalBtn");

  if (loginLink && loginModal && closeLoginBtn) {
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "block";
    });

    closeLoginBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  }

  const signupModal = document.getElementById("signupModal");
  const openSignupLink = document.getElementById("openSignupLink");
  const closeSignupBtn = document.getElementById("closeSignupModalBtn");
  const backToLoginLink = document.getElementById("backToLoginLink");

  if (signupModal && openSignupLink && closeSignupBtn && backToLoginLink) {
    openSignupLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "none";
      signupModal.style.display = "block";
    });

    closeSignupBtn.addEventListener("click", () => {
      signupModal.style.display = "none";
    });

    backToLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      signupModal.style.display = "none";
      loginModal.style.display = "block";
    });

    window.addEventListener("click", (event) => {
      if (event.target === signupModal) {
        signupModal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const greetingPopup = document.getElementById("greetingPopup");
  const closeGreetingPopup = document.getElementById("closeGreetingPopup");

  contactForm?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show the custom popup
    greetingPopup.style.display = "block";

    // Optional: reset the form
    contactForm.reset();
  });

  // Close popup on clicking X
  closeGreetingPopup?.addEventListener("click", () => {
    greetingPopup.style.display = "none";
  });

  // Close popup when clicking outside the content box
  window.addEventListener("click", (e) => {
    if (e.target === greetingPopup) {
      greetingPopup.style.display = "none";
    }
  });
});

