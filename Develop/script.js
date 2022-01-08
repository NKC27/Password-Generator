var generateBtn = document.querySelector('#generate');
function generatePassword() {
  // Characters to be added to random password
  var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";

  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numberCharacters = "0123456789";

  var specialCharacters = "!#$%&\'()*+,-./:;<=>?@[]^_`{|}~";

  // Adding empty variables to be generated
  var password = "";

  var allChars = "";

  // Prompt user for the length of the password

  var passLength = prompt("Your password length must be between 8 - 128 characters long")

// Making sure password length is at a minimum & maximum range

if(passLength >= 8 && passLength <= 128) {
  console.log(passLength)
}

// Output password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

 