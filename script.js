document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.className = "mt-3 mb-0 fw-semibold error";
        return;
      }

      formMessage.textContent = "Thank you! Your message has been submitted successfully.";
      formMessage.className = "mt-3 mb-0 fw-semibold success";
      contactForm.reset();
    });
  }
});