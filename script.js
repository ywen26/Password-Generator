// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assign all necessary characters to variables
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "12345678909876543210123456789";
var characters = "!#$%&'()*+,-./:;<=>?@\[^_`{|}~";

// Generate a new random password
function generatePassword() {
  // Set the password length range between 8 - 128, and other length wouldn't be accepted
  var lengthChoice = prompt("Please choose the length of password you want to generate. It should be between 8 - 128 characters:");
  if ( lengthChoice < 8 || lengthChoice > 128) {
    var blank = "";
    alert("Oooops! Not the length standard for password. Please try again.");
    return blank;
  }

  var lowerCase = confirm("Do you want to include letters with lowercase?");
  var upperCase = confirm("Do you want to include letters with uppercase?");
  var numeric = confirm("Do you want to include the numbers?")
  var specialChar = confirm("Do you want to include the special characters?");
  // Push the letters, numbers or special characters to selectable type choice if are chosen
  var typeChoice = "";

  if (lowerCase === true) {
    typeChoice = typeChoice + letter.toLowerCase();
  }

  if (upperCase === true) {
    typeChoice = typeChoice + letter;
  }

  if (numeric === true) {
    typeChoice = typeChoice + number;
  }

  if (specialChar === true) {
    typeChoice = typeChoice + characters;
  }
  // Run a random password within the range of selected length and characters
  var passwordOutput = "";
  for (var i = 0; i < lengthChoice; i++) {
    passwordOutput = passwordOutput + typeChoice.charAt(Math.floor(Math.random()*typeChoice.length));
  }
  return passwordOutput;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
