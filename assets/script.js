// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {  // Declares a function called generatePassword

  const passwordLength = parseInt(window.prompt("How many characters do you want the password to contain?"));

  // Sets limits for password length
  if (passwordLength > 128 || passwordLength < 8){   
    return alert("Password length cannot be lesser than 8 characters or more than 128 characters")
  }else{passwordLength}

  const acceptSpecialCharacters = confirm("Click OK to confirm including special characters");
  const acceptNum = confirm("Click OK to confirm including numeric characters");
  const acceptLower = confirm("Click OK to confirm including lowercase");
  const acceptUpper = confirm("Click OK to confirm including uppercase");
  var master = []; // Declares an empty array called master
  var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Declares a variable called numCharacters
  var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "["]; // Declares a variable called specialCharacters
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // Declares a variable called lowercase
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // Declares a variable called uppercase

  // Uses if statements to concatenate arrays to master variable based on user choice

  if (acceptSpecialCharacters) {
    master = master.concat(specialCharacters);
  }
  if (acceptNum) {
    master = master.concat(numCharacters);
  }
  if (acceptLower) {
    master = master.concat(lowercase);
  }
  if (acceptUpper) {
    master = master.concat(uppercase);
  }

  var passwordArray = [] // Declares an empty array called passwordArray

  //Uses a for loop to randomly select an element in master array based on password length, continuously push the random character into passwordArray

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * master.length);
    var randomCharacter = master[randomIndex];
    passwordArray.push(randomCharacter);
  }

  passwordArray.toString(); //Converts passwordArray to a string
  return passwordArray.join(''); //Joins elements in passwordArray to form a string

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


