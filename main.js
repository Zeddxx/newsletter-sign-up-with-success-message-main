function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var emailInput = document.getElementById("email");
  var userEmail = document.querySelector('.email-user');
  // Validate email
  var emailError = document.getElementById("emailError");
  var emailValue = emailInput.value;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Valid email required";
    emailInput.classList.add('error-mail');
    emailInput.focus();
  } else {
    // Email is valid, show success message
    var text = userEmail.innerText = emailValue;
    console.log(text);
    emailInput.classList.remove('error-mail');
    showSuccessMsg(); // Call the showSuccessMsg() function to show the success message
  }
}

function showSuccessMsg() {
  var popUpDiv = document.querySelector('.success-msg');
  var formMain = document.querySelector('.form');
  var dismissBtn = document.querySelector('.dismiss-btn');

  popUpDiv.classList.add('success');
  formMain.classList.add('hide');

  // Add event listener to dismiss button
  dismissBtn.addEventListener('click', function() {
    popUpDiv.classList.remove('success');
    formMain.classList.remove('hide');
  });
}

// Add event listener to form submission
document.getElementById("myForm").addEventListener("submit", validateForm);
