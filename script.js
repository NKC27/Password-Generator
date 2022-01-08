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
// If password length provided is less than the min or more than the max will return an alert and require the user to start again.
else {
  alert("Password must be minimum 8 characters & maximum 128 characters")
  return"";
}
// Asking the user to add lower case letters in the password.
var lowerCharactersChk = confirm('Please select lower case  letters in your password? i.e (a-z)')
// Asking the user to add upper case letters in the password.
var upperCharactersChk = confirm('Please select upper case letters in your password? i.e (A-Z)')
// Asking the user to add numbers in the password.
var numberCharactersChk = confirm('Please add numbers in your password? i.e.(0-9)')
// Asking the user to add special characters in the password.
var specialCharactersChk = confirm('Please add special characters  letters in your password? i.e. (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~)')
// If lower case letters are selected from prompts, random pick a letter from the lowerCharaters array.
if (lowerCharactersChk) {
  allChars += lowerCharacters
}
// If upper case letters are selected, random pick a letter from the upperCharacters array.
if (upperCharactersChk) {
  allChars += upperCharacters
}
// If numbers are selected, random pick a number from the numbers array.
if (numberCharactersChk) {
  allChars += numberCharacters
}
// If special characters are selected, random pick a character from the special Chararcters array.
if (specialCharactersChk) {
  allChars += specialCharacters
}
// This will alert the user to say no characters have been selected.
if (
  !lowerCharacters && !upperCharacters && !numberCharacters && !specialCharacters
) {
  return alert('Please select the correct criteria!');
}
// for loop to select random characters from allChars to fill the password length
for (var i = 0; i < passLength; i++) {
  password += allChars[Math.floor(Math.random() * allChars.length)];
}
return password;
}
// Output password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);