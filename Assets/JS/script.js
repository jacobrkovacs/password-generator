// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let numberChar  = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let specialChar = ["!", "@", "$", "%", "&", "-", " ", "{", "}", "(", ")", "[", "]", "*", "#", "+", "/", ";", ":", ",", "."]

let charCount
let useUpper   
let useLower    
let useNumber   
let useSpecial 
let newPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", resetPassword)


function generatePassword(){
    //runs prompt to set charCount until the requirement is met
    do{
      charCount = prompt("How many characters would you like your password to contain?\nNote: your password must be between 8 and 128 characters long.")
      if(!charCount){
        return
      }
      if(charCount < 8 || charCount > 128){
        alert("Invalid Response\nPlease follow the noted requirements")
      }
    }while(charCount < 8 || charCount > 128)

    //converts string type to number type
    charCount = Number(charCount)

    //determines if the user wants to use uppercase, lowercase, number or special characters
    do{
      useUpper   = confirm("Would you like to use Uppercase letters?\nPress 'OK' for Yes or 'Cancel' for No");
      useLower   = confirm("Would you like to use Lowercase letters?\nPress 'OK' for Yes or 'Cancel' for No");
      useNumber  = confirm("Would you like to use Numbers?\nPress 'OK' for Yes or 'Cancel' for No");
      useSpecial = confirm("Would you like to use Special Characters?\nPress 'OK' for Yes or 'Cancel' for No")

      if(!useUpper && !useLower && !useNumber && !useSpecial){
        alert("You must confirm at least one of these conditions")
      }
    } while(useUpper == false && useLower == false && useNumber == false && useSpecial == false)

    let confirmChar = [useUpper, useLower, useNumber, useSpecial]
    let characters  = [upperLetter, lowerLetter, numberChar, specialChar]
    
    
    //Guarantees at least one type of each selected character is in the password
    for(let i = 0; i < characters.length; i ++){
      if(confirmChar[i]){
        newPassword = newPassword.concat((characters[i][Math.floor(Math.random() * characters[i].length)]))
      }
    }
    //Takes a random index from each character array and then selects a random index from the new array to concat to the newPassword variable
    do{
      var randomChar = []
      for(var j = 0; j < characters.length; j++){
        if(confirmChar[j]){
          randomChar.push(characters[j][Math.floor(Math.random() * characters[j].length)]);
        }
      } 
      newPassword = newPassword.concat(randomChar[Math.floor(Math.random() * randomChar.length)])
    }while (newPassword.length < charCount)
    //needs to return a value for the writePassword function
    return newPassword
}

function resetPassword(){
  newPassword  = ""
}