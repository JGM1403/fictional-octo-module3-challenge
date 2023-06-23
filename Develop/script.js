// creating an object to store all values
var characters = {
  upper: ["A", "B" , "C" ,"D" ,"E" , "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ,
  lower: ["a", "b" , "c" ,"d" ,"e" , "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ,
  numbers : [1, 2, 3, 4, 5, 6, 7, 8, 9,] ,
  special : ["!", "@" , "#" ,"$" ,"%" , "^", "&", "*", "(", ")", "-", "=", "+", "{", "}",]
}


var usersCharacters = [];
var finalLength = 0;


var writePassword = function() { 
  var passwordLength = prompt("How many character do you want in your password?");
  if (passwordLength < 8){
  alert("Length of password must be greater than 8 characters")
  return;
  }
  else if (passwordLength > 128) {
  alert("Length of password must be less than 128 charcters")
  return;
  }
  else {
    console.log("Password Length: " + passwordLength);
    finalLength = passwordLength;
  } 

  var includeLowercase = confirm("Do you want lowercase letters in your password?");
  if (includeLowercase) {
    console.log("include lowercase letters");
    usersCharacters.push(...characters.lower);
  }
  else if (!includeLowercase) {
    console.log("exclude lowercase letters");
  };

  var includeUppercase = confirm("Do you want uppercase letters in your password?");
  if (includeUppercase) {
    console.log("include uppercase letters");
    usersCharacters.push(...characters.upper);
  }
  else if (!includeUppercase) {
    console.log("exclude uppercase letters");
  };

  var includeNumbers = confirm("Do you want numbers in your password?");
  if (includeNumbers) {
    console.log("include numbers");
    usersCharacters.push(...characters.numbers);
  }
  else if (!includeNumbers) {
    console.log("exclude numbers");
  };

  var includeSpecial = confirm("Do you want special characters in your password?")
  if (includeSpecial) {
    console.log("include special characters");
    usersCharacters.push(...characters.special);
  }
  else if (!includeSpecial) {
    console.log("exclude special characters");
  }
  console.log("final length of password: " + finalLength + " characters long");
  console.log("will use: " + usersCharacters + " for password");
  // return usersCharacters;
  finalPassword();
  }

var passwordArray = [];

  function generatePassword() {
    console.log("in generate password");
    var passwordArray = [];
    console.log(finalLength);
    
    for (var i = 0; i < finalLength; i++) {
      console.log("in the for loop");
      console.log("i = " + i);
      var characterNumber = Math.floor(Math.random() * usersCharacters.length);
      var character = usersCharacters[characterNumber];

      passwordArray.push(character);
    }
    console.log(passwordArray);
   return passwordArray.join("");

  } 
    
// Assignment Code
var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
function finalPassword() {
  console.log("in final password function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


