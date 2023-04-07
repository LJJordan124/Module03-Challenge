// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables
var characterLength = 8;
var choiceArr = [];
// Array of letters, numbers, and symbols
var lowerCaseArr = ["a","b","c","d","e","f","g","h",'i',"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H",'I',"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArr = ['!','@','#','$','%','^','&','*','_','-','+','.','?'];
var numberArr = [0,1,2,3,4,5,6,7,8,9];

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
  // Password Length
  characterLength = parseInt(prompt("How many characters would you like your password to contain?"));
  if (isNaN(characterLength || 8 > characterLength || characterLength > 128)) {
    alert("Please input the number of how many characters you want your password to be, and within the range of 8 to 128.");
    return false;
  }

  // Password Characteristics
  if (confirm("Click OK to confirm including special characters.")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Click OK to confirm including numeric characters.")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Click OK to confirm including lowercase characters.")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Click OK to confirm including uppercase characters.")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
return true;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // either true or false
  var passwordText = document.querySelector("#password");
  if(correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}