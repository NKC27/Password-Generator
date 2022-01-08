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


// Output password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

 