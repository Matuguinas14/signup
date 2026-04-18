function validateForm() {
  // Clear all error messages and success message at the start
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("birthError").innerHTML = "";
  document.getElementById("sexError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("userError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("confirmError").innerHTML = "";
  document.getElementById("dropdownError").innerHTML = "";
  document.getElementById("checkboxError").innerHTML = "";
  document.getElementById("usageError").innerHTML = "";
  document.getElementById("successMessage").innerHTML = "";

  let isValid = true;

  // ===== PERSONAL INFORMATION SECTION =====

  // 1. Full Name validation - not empty, at least 2 characters
  const fullName = document.getElementById("fullName").value;
  if (fullName.length === 0) {
    document.getElementById("nameError").innerHTML = "Full name is required";
    isValid = false;
  } else if (fullName.length < 2) {
    document.getElementById("nameError").innerHTML = "Full name must be at least 2 characters";
    isValid = false;
  }

  // 2. Birthdate validation - not empty, user must be 13 years old or older
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate.length === 0) {
    document.getElementById("birthError").innerHTML = "Birthdate is required";
    isValid = false;
  } else {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 13) {
      document.getElementById("birthError").innerHTML = "You must be at least 13 years old";
      isValid = false;
    }
  }

  // 3. Sex validation - at least one option selected (using loop)
  const sexRadios = document.getElementsByName("sex");
  let sexChecked = false;
  for (let i = 0; i < sexRadios.length; i++) {
    if (sexRadios[i].checked) {
      sexChecked = true;
      break;
    }
  }
  if (!sexChecked) {
    document.getElementById("sexError").innerHTML = "Please select a sex";
    isValid = false;
  }

  // 4. Email validation - not empty, must contain @ and a dot
  const email = document.getElementById("email").value;
  if (email.length === 0) {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerHTML = "Email must contain @ and end with a dot (.)";
    isValid = false;
  }

  // ===== ACCOUNT DETAILS SECTION =====

  // 5. Username validation - 8-20 characters, letters and digits only
  const username = document.getElementById("username").value;
  const lettersAndNumbers = /^[a-zA-Z0-9]{8,20}$/;
  if (username.length === 0) {
    document.getElementById("userError").innerHTML = "Username is required";
    isValid = false;
  } else if (!lettersAndNumbers.test(username)) {
    document.getElementById("userError").innerHTML = "Username must be 8-20 characters, letters and digits only";
    isValid = false;
  }

  // 6. Password validation - at least 10 characters, at least 1 uppercase, 1 lowercase, 1 digit
  const password = document.getElementById("password").value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  
  if (password.length === 0) {
    document.getElementById("passError").innerHTML = "Password is required";
    isValid = false;
  } else if (password.length < 10) {
    document.getElementById("passError").innerHTML = "Password must be at least 10 characters";
    isValid = false;
  } else if (!hasUppercase || !hasLowercase || !hasDigit) {
    document.getElementById("passError").innerHTML = "Password must include at least one uppercase letter, one lowercase letter, and one digit";
    isValid = false;
  }

  // 7. Confirm Password validation - must match password exactly
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword.length === 0) {
    document.getElementById("confirmError").innerHTML = "Confirm password is required";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmError").innerHTML = "Passwords do not match";
    isValid = false;
  }

  // ===== TOPIC QUESTIONS SECTION =====

  // 8. Dropdown validation - not left on blank default option
  const dropdown = document.getElementById("dropdownQ").value;
  if (dropdown === "") {
    document.getElementById("dropdownError").innerHTML = "Please select an interest";
    isValid = false;
  }

  // 9. Checkboxes validation - at least one must be checked (using loop)
  const checkboxes = document.getElementsByName("preferences");
  let checkboxChecked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxChecked = true;
      break;
    }
  }
  if (!checkboxChecked) {
    document.getElementById("checkboxError").innerHTML = "Please select at least one preference";
    isValid = false;
  }

  // 10. Usage radio buttons validation - at least one must be selected (using loop)
  const usageRadios = document.getElementsByName("usage");
  let usageChecked = false;
  for (let i = 0; i < usageRadios.length; i++) {
    if (usageRadios[i].checked) {
      usageChecked = true;
      break;
    }
  }
  if (!usageChecked) {
    document.getElementById("usageError").innerHTML = "Please select your usage frequency";
    isValid = false;
  }

  // Show success message only if all validations passed
  if (isValid) {
    document.getElementById("successMessage").innerHTML = "Success! Form submitted successfully.";
  }

  // Return isValid to prevent form submission if there are errors
  return isValid;
}
