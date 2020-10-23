// Assignment Code
var generateBtn = document.querySelector("#generate");
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var characters = "!#$%&'()*+,-./:;<=>?@\[^_`{|}~";

var lengthChoice = prompt("Please choose the length of password you want to generate. It should be between 8 - 128 characters:");
var lowerCase = confirm("Do you want to include letters with lowercase?");
var upperCase = confirm("Do you want to include letters with uppercase?");
var numeric = confirm("Do you want to include the numbers?")
var specialChar = confirm("Do you want to include the special characters?");

function generatePassword() {
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
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "";

  for (var i = 0; i < lengthChoice; i++) {
    if (lowerCase === true) {
      password = password + letter.toLowerCase().charAt(Math.floor(Math.random()*25));
    }

    if (upperCase === true) {
      password = password + letter.charAt(Math.floor(Math.random()*25));
    }
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

