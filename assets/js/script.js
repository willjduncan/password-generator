// Assignment code here
//VARIABLES
const characterMin = 8;
const characterMax = 128;
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`\\{|}~";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numChar = "1234567890"
var totalChar = "";
var finalresult = "";


function generatePassword() {
  //RE-CLEAR THE FINAL RESULT EACH TIME TO GENERATE A NEW PASSWORD
  finalresult = "";
  //ISSUE PROMPTS
  promptUser();
  //WHILE NO FINAL RESULT IS FOUND, GENERATE A PASSWORD
  while (!finalresult) {
    gen();
  };
  //CLEAR TOTALCHAR SO THAT WHEN THE BUTTON IS RE-CLICKED, THE CONDITIONS ARE RENEWED.
  totalChar = '';
  return finalresult;
};

var promptUser = function() {
  //GET THE CHARACTER COUNT WITHIN THE MAX AND MIN NUMBER OF CHARACTERS ALLOWED
  characterCount = window.prompt("how many characters long would you like your password to be?")
  while (characterCount < characterMin || characterCount > characterMax) {
    characterCount = window.prompt("Sorry, you must pick a number between " + characterMin + " and " + characterMax + ". How many characters long would you like your password to be?")
  };

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
};

//GENERATE THE PASSWORD
function gen() {
  var result = '';
  for ( var i = 0; i < characterCount; i++ ) {
    result += totalChar.charAt(Math.floor(Math.random() * totalChar.length));
  };

  //CHECK WHETHER A CHARACTER FROM EACH APPROVED FAMILY IS INCLUDED IN THE GENERATED PASSWORD.
  if ((includeNum) && (result.match(/[0-9]/)) === null) {
    return;
  } else if ((includeLower) && (result.match(/[a-z]/g)) === null) {
    return;
  } else if ((includeUpper) && (result.match(/[A-Z]/g)) === null) {
    return;
  } else if ((includeSpecial) && (result.match(/[ !~@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) === null) {
    return;
  } else {
    finalresult = result;
    return;
  }
};


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
