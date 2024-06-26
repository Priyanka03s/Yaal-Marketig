function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();

  // Form data
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // Validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create a unique ID for each submission
  const uniqueId = Date.now();

  // Create an object to store form data
  const formSubmission = {
    id: uniqueId,
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  // Store the form data in local storage
  const submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  submissions.push(formSubmission);
  localStorage.setItem("formSubmissions", JSON.stringify(submissions));

  // Clear form fields
  event.target.reset();

  // Display success message
  const submitMessage = document.getElementById("submitMessage");
  submitMessage.textContent =
    "We will soon contact you. Thanks for contacting us!";

  // Clear success message after 5 seconds
  setTimeout(() => {
    submitMessage.textContent = "";
  }, 5000);
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", submitForm);
