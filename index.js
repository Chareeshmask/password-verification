
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('retype-password').value;
    const message = document.getElementById('message');
  
    // Predefined correct password
    const correctPassword = "102801";
  
    // Check if passwords match and validate against the correct password
    if (password === retypePassword) {
      if (password === correctPassword) {
        message.style.color = 'green';
        message.textContent = 'Password matched! Form submitted successfully.';
      } else {
        message.style.color = 'red';
        message.textContent = 'The password is incorrect. Please try again later.';
      }
    } else {
      message.style.color = 'red';
      message.textContent = 'Passwords do not match. Please try again.';
    }
  });
  