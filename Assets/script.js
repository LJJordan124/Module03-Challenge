// Array of letters, numbers, and symbols
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "U", "V", "W", "x", "y", "z"];
var num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "~", "|"];
var solutionSet = []
var password = []

// Generate Password based off of user input
function generatePassword() {
    solutionSet = [];
    password = [];

    var userInput = prompt("How many characters would you like your password to contain?");
    if (!userInput) {
        alert('This needs a value');
        return null;
    }
    if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
        alert("Please input the number of how many characters you want your password to be, and within the range of 8 to 128.");
        return null;
    }

    var confirmLowercase = confirm("Click OK to confirm including lowercase characters.");
    var confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
    var confirmNumbers = confirm("Click OK to confirm including numeric characters.");
    var confirmSpecial = confirm("Click OK to confirm including special characters.");

    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
        alert("You must choose one criteria");
        generatePassword();
    } 
    if (confirmLowercase) {
        solutionSet = solutionSet.concat(alphaLower);
    }
    if (confirmUppercase) {
        solutionSet = solutionSet.concat(alphaUpper);
    }
    if (confirmNumbers) {
        solutionSet = solutionSet.concat(number);
    }
    if (confirmSpecial) {
        solutionSet = solutionSet.concat(special)
    }
    for (var i = 0; i < userInput; i++) { 
        var randomIndex = Math.floor(Math.random() * solutionSet.length);
        var indexValue = solutionSet[randomIndex];
        password.push(indexValue);
    }
    return password.join("");
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);