///////////////////////// DO NOT CHANGE ////////////////////////////////////
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
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var lengthChoice = window.prompt("Enter how many characters should your password should be.");
  if (lengthChoice >= 8 || lengthChoice <= 128) {
    var lower = confirm("Would you like to use lowercase characters?");
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = confirm("Would you like to use uppercase characters?");
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];
    var special = confirm("Would you like to use special characters?");
    var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var num = confirm("Would you like to use numerals?");
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var characterChoice = [];
      if (lower === true || upper === true || special === true || num === true) {
        if (lower === true) {
          characterChoice += lowercase;
        }

        if (upper === true) {
          characterChoice += uppercase;
        }

        if (special === true) {
          characterChoice += specialChar;
        }

        if (num === true) {
          characterChoice += numbers;
        }

        var password = "";
        var characters = characterChoice;
        var passwordLength = lengthChoice;
        for (var i = 0; i < passwordLength; i++){
          password += characters.charAt(Math.floor(Math.random() * passwordLength));
        }
        document.getElementById("password").textContent = generatePassword(passwordLength);
        return password;
      }
      else {
        alert("Please select one of the options.")
      }
  }
  else {
    alert("Enter a number between 8 and 128.");
  }
}
