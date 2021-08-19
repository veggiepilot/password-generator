// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters =  'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var numericCharacters = '0123456789';

// Write password to the #password input
function writePassword() {
  var password     = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// when button is clicked, prompt the user for input
function generatePassword() {

  // declare a password variable
  var password = '';
  //get length of password
  var passwordLengthPrompt= prompt('How many characters do you want your password to be? \nChoose a number between 8 and 128.' );
  //parse passwordLengthPrompt to integer
  passwordLengthPrompt = parseInt(passwordLengthPrompt);

  //verify password length choice meets length criteria
  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    // confirmation of lowercase letters 
    var lowerCasePrompt = confirm("Do you want your password to have lowercase letters?");
    if (lowerCasePrompt) {
      password += lowerCaseLetters;
    }
    // confirmation of uppercase letters 
    var upperCasePrompt = confirm("Do you want your password to have uppercase letters?");
    if (upperCasePrompt) {
      password += lowerCaseLetters.toUpperCase();
    }

    // specialCharactersPrompt  
    var specialCharactersPrompt = confirm("Do you want your password to have special characters?");
    if (specialCharactersPrompt) {
      password += specialCharacters;
    }

    // numericCharactersPrompt
    var numericCharactersPrompt = confirm("Do you want your password to have numbers?");
    if (numericCharactersPrompt) {
      password += numericCharacters;
    }

    var result = '';
    // selecting a random character from our password variable
    for (var i = 0; i < passwordLengthPrompt; i++) {
      result  += password.charAt(Math.floor(Math.random() * password.length))
    }
    
    return result;
   
  } else {
    alert('You need to select a password length within the specified parameters. \n Refresh the page and try again.');
  }

}

