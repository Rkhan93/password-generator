// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Arrays
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

passwordText.value = password;

}

// ALL YOUR CODE FOR THIS HOMEWORK WILL HAPPEN HERE
function generatePassword(){ 

  //How many characters would you like to enter for your password 
  
  var password = prompt("How many characters would you like enter your password?");
  } 

//if 

if(passwordText <= 8) (passwordText >= 128)
  alert("Password length must be between 8-128 characters");
  

  // Details of password 
  var specialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var numericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
  var lowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var upperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Defining a function looks like this:
  // function putTheNameOfYourFunctionHere () {}

// Defining any other variable looks like this:
  // var putTheNameOfYourVariableHere;

