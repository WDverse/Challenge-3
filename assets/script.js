// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharacters = {
  numCharacters: "0123456789",
  specialCharacters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

function generatePassword() {
  const passwordLength = window.prompt("How many characters do you want the password to contain?")
  const acceptSpecialCharacters = confirm("Click OK to confirm including special characters")
  const acceptnum = confirm("Click OK to confirm including numeric characters")
  const acceptlower = confirm("Click OK to confirm including lowercase")
  const acceptUpper = confirm("Click OK to confirm including uppercase")
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


