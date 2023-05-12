var choicePool = [];
var password = [];
// Array of letters, numbers, and symbols
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
alphaLower = alphaLower.split('');
var number = '123456789';
number = number.split('');
var special = "!@#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
special = special.split('');
var upperCase = function (letters) {
    return letters.toUpperCase();
};
var alphaUpper = alphaLower.map(upperCase);

// * Function to generate random password based off user input
function generatePassword() {
    choicePool = [];
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
        choicePool = choicePool.concat(alphaLower);
    }
    if (confirmUppercase) {
        choicePool = choicePool.concat(alphaUpper);
    }
    if (confirmNumbers) {
        choicePool = choicePool.concat(number);
    }
    if (confirmSpecial) {
        choicePool = choicePool.concat(special)
    }
    for (var i = 0; i < userInput; i++) { 
        var randomIndex = Math.floor(Math.random() * choicePool.length);
        var indexValue = choicePool[randomIndex];
        password.push(indexValue);
    }
    return password.join("");
}
//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//* Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);