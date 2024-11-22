// Get references to form and fields
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error display elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Utility function to show error message
function showError(element, message) {
  element.textContent = message;
}

// Utility function to clear error message
function clearError(element) {
  element.textContent = '';
}

// Validation functions
function validateName() {
  if (fullName.value.trim().length < 5) {
    showError(nameError, 'Name must be at least 5 characters long.');
    return false;
  }
  clearError(nameError);
  return true;
}

function validateEmail() {
  if (!email.value.includes('@')) {
    showError(emailError, 'Enter a valid email address.');
    return false;
  }
  clearError(emailError);
  return true;
}

function validatePhone() {
  const phoneRegex = /^\d{10}$/; // Ensures 10 digits
  if (!phoneRegex.test(phone.value) || phone.value === '1234567890') {
    showError(phoneError, 'Enter a valid 10-digit phone number.');
    return false;
  }
  clearError(phoneError);
  return true;
}

function validatePassword() {
  if (
    password.value.length < 8 ||
    password.value.toLowerCase() === 'password' ||
    password.value.toLowerCase() === fullName.value.toLowerCase()
  ) {
    showError(passwordError, 'Password must be strong and not your name or "password".');
    return false;
  }
  clearError(passwordError);
  return true;
}

function validateConfirmPassword() {
  if (password.value !== confirmPassword.value) {
    showError(confirmPasswordError, 'Passwords do not match.');
    return false;
  }
  clearError(confirmPasswordError);
  return true;
}

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Run all validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  // Check if all validations pass
  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
    alert('Registration successful!');
    form.reset(); // Reset the form
  }
});

// Real-time validation on field change
[fullName, email, phone, password, confirmPassword].forEach((input) => {
  input.addEventListener('input', () => {
    switch (input.id) {
      case 'fullName':
        validateName();
        break;
      case 'email':
        validateEmail();
        break;
      case 'phone':
        validatePhone();
        break;
      case 'password':
        validatePassword();
        break;
      case 'confirmPassword':
        validateConfirmPassword();
        break;
    }
  });
});
