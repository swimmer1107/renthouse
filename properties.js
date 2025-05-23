document.addEventListener("DOMContentLoaded", function () {
  // --- Booking Modal ---
  const bookingModal = document.getElementById("bookingModal");
  const openBookingBtn = document.getElementById("toggleBookingBtn");
  const closeBookingBtn = document.getElementById("closeModalBtn");

  openBookingBtn?.addEventListener("click", () => {
    bookingModal.style.display = "block";
  });

  closeBookingBtn?.addEventListener("click", () => {
    bookingModal.style.display = "none";
  });

  // --- Login Modal ---
  const loginModal = document.getElementById("loginModal");
  const loginLink = document.getElementById("loginLink");
  const closeLoginBtn = document.getElementById("closeLoginModalBtn");

  loginLink?.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "block";
  });

  closeLoginBtn?.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  // --- Sign Up Modal ---
  const signupModal = document.getElementById("signupModal");
  const openSignupLink = document.getElementById("openSignupLink");
  const closeSignupBtn = document.getElementById("closeSignupModalBtn");
  const backToLoginLink = document.getElementById("backToLoginLink");

  openSignupLink?.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "block";
  });

  closeSignupBtn?.addEventListener("click", () => {
    signupModal.style.display = "none";
  });

  backToLoginLink?.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.style.display = "none";
    loginModal.style.display = "block";
  });

  // --- Property Details Modal ---
  const detailModal = document.getElementById("detailsModal");
  const closeDetailsBtn = document.getElementById("closeDetailsModalBtn");

  const detailTitle = document.getElementById("detailsTitle");
  const detailImage = document.getElementById("detailsImage");
  const detailInfo = document.getElementById("detailsInfo");
  const detailPrice = document.getElementById("detailsPrice");
  const detailLocation = document.getElementById("detailsLocation");

  document.querySelectorAll(".view-more-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".property-card");

      detailTitle.textContent = card.querySelector("h3").textContent;
      detailImage.src = card.querySelector("img").src;
      detailImage.alt = card.querySelector("img").alt;
      detailInfo.textContent = card.querySelector("p:nth-of-type(1)").textContent;
      detailPrice.textContent = card.querySelector("p:nth-of-type(2)").textContent;
      detailLocation.textContent = card.querySelector("p:nth-of-type(3)").textContent;

      detailModal.style.display = "block";
    });
  });

  closeDetailsBtn?.addEventListener("click", () => {
    detailModal.style.display = "none";
  });

  // --- Close any modal when clicking outside of it ---
  window.addEventListener("click", (event) => {
    if (event.target === bookingModal) bookingModal.style.display = "none";
    if (event.target === loginModal) loginModal.style.display = "none";
    if (event.target === signupModal) signupModal.style.display = "none";
    if (event.target === detailModal) detailModal.style.display = "none";
  });

  // --- Search Filter ---
  const searchInput = document.getElementById("searchInput");

  searchInput?.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    const propertyCards = document.querySelectorAll(".property-card");

    propertyCards.forEach(card => {
      const title = card.getAttribute("data-title")?.toLowerCase() || "";
      const location = card.getAttribute("data-location")?.toLowerCase() || "";

      if (title.includes(filter) || location.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
