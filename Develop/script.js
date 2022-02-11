// Assignment code here
//VARIABLES
var characterMin = 8;
var characterMax = 128;
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`\\{|}~";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numChar = "1234567890"
var totalChar = "";

//GET THE CHARACTER COUNT WITHIN THE MAX AND MIN NUMBER OF CHARACTERS ALLOWED
characterCount = window.prompt("how many characters long would you like your password to be?")
  while (characterCount < characterMin || characterCount > characterMax) {
    characterCount = window.prompt("Sorry, you must pick a number between " + characterMin + " and " + characterMax + ". How many characters long would you like your password to be?")
  }
  console.log(characterCount);

//ASK WHETHER TO INCLUDE SPECIAL CHARACTERS AND REFLECT IT IN THE TOTAL CHARACTERS VARIABLE  
includeSpecial = window.confirm("Do you want to include special characters?");
if (includeSpecial) {
  totalChar = totalChar + specialChar;
};

//ASK WHETHER TO INCLUDE UPPERCASE CHARACTERS AND REFLECT IT IN THE TOTAL CHARACTERS VARIABLE  
includeUpper = window.confirm("Do you want to include uppercase characters?");
if (includeUpper) {
  totalChar = totalChar + upperChar;
};

//ASK WHETHER TO INCLUDE LOWERCASE CHARACTERS AND REFLECT IT IN THE TOTAL CHARACTERS VARIABLE  
includeLower = window.confirm("Do you want to include lowercase characters?");
if (includeLower) {
  totalChar = totalChar + lowerChar;
};

//ASK WHETHER TO INCLUDE NUMBERS AND REFLECT IT IN THE TOTAL CHARACTERS VARIABLE  
includeNum = window.confirm("Do you want to include numbers?");
if (includeNum) {
  totalChar = totalChar + numChar;
};
console.log(totalChar);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
