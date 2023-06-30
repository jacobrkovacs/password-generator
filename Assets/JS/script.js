// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

    //runs prompt to set charCount until the requirement is met
    do{
      charCount = prompt("How many characters would you like your password to contain?\nNote: your password must be between 8 and 128 characters long.")
      if(charCount < 8 || charCount > 128){
        alert("Invalid Response")
      }
      if(!charCount){
        return
      }
    } while(charCount < 8 || charCount > 128)
  
    //confirms the character count in the console
    console.log(charCount)

    //converts string type to number type
    charCount = Number(charCount)

    //determines if the user wants to use uppercase letters
    useUpper = confirm("Would you like to use Uppercase letters?")
    if(useUpper){
      
    } 
    



    //needs to return a value for the writePassword function
    return charCount + charCount








    






}