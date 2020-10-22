// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var lowerCase = confirm("Do you want to include letters with lowercase?");
// var upperCase = confirm("Do you want to include letters with uppercase?");
// var numeric = confirm("Do you want to include the numbers?")
// var specialChar = confirm("Do you want to include the special characters?");