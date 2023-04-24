// This is a function named "check"
function check() {
  // Declare and initialize a constant variable named "adminMail" with a string value
  const adminMail = 'admin@admin.com';
  // Declare and initialize a constant variable named "adminPassword" with a string value
  const adminPassword = '123456';
  // Declare and initialize a variable named "mail" with the value of the input element with id "email"
  let mail = document.getElementById('email').value;
  // Declare and initialize a variable named "password" with the value of the input element with id "password"
  let password = document.getElementById('password').value;

  // Check if the value of "mail" is equal to "adminMail" AND if the value of "password" is equal to "adminPassword"
  if (mail == adminMail && password === adminPassword) {
    // Redirect to Home.html
    window.location.href = './Home.html';
    // If the condition is true, show an alert with message "Successful"
    alert('Successful');
    // Return true
    return true;
  } else {
    // If the condition is false, show an alert with message "Wrong password or mail"
    alert('Wrong password or e-mail');
    // Return false
    return false;
  }
}
