 
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecial;
var confirmNumber;
var confirmUpper;
var confirmLower;

// Prompt to ask how many characters the user prefers in password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password ?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // Rules for password 
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumber = confirm("Click OK to confirm if you would like to include numbers");    
    var confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters");
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters");
      
    // Loop if answer is outside the parameters 
      while(confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumber === false) {
        alert("You must choose at an option");
        var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumber = confirm("Click OK to confirm if you would like to include numbers");    
        var confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters");
        var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters");   
    } 

     var passwordCharacters = []
      
     if (confirmSpecial) {
       passwordCharacters = passwordCharacters.concat(Special)
     }
 
     if (confirmNumber) {
       passwordCharacters = passwordCharacters.concat(number)
     }
       
     if (confirmLower) {
       passwordCharacters = passwordCharacters.concat(Lower)
     }
 
     if (confirmUpper) {
       passwordCharacters = passwordCharacters.concat(Upper)
     }
 
       console.log(passwordCharacters)
 
       // Random characters to form password
       var randomPassword = ""
       
       for (var i = 0; i < confirmLength; i++) {
         randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
         console.log(randomPassword)
       }
       return randomPassword;
 }
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 }
