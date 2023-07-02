// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let numberChar  = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let specialChar = ["!", "@", "$", "%", "&", "-"]

let charCount
let useUpper   
let useLower    
let useNumber   
let useSpecial 
let newPassword = [];

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

    //converts string type to number type
    charCount = Number(charCount)

    do{
      //determines if the user wants to use uppercase, lowercase, number or special characters
      useUpper   = confirm("Would you like to use Uppercase letters?");
      useLower   = confirm("Would you like to use Lowercase letters?");
      useNumber  = confirm("Would you like to use Numbers?")
      useSpecial = confirm("Would you like to use Special Characters?")

      if(useUpper == false && useLower == false && useNumber == false && useSpecial == false){
        alert("You must confirm at least one of these conditions")
      }
    } while(useUpper == false && useLower == false && useNumber == false && useSpecial == false)


    // adds all the characters of the password together into one string
    function concatPassword(){

      function useUpperChar(){
        if(useUpper == true){
          let newUpper = upperLetter[Math.floor(Math.random() * upperLetter.length)]
          newPassword.push(newUpper)
        }
        else{
          charCount
        }
      }
  
      function useLowerChar(){
        if(useLower == true){
          let newLower = lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
          newPassword.push(newLower)
        }else{
          charCount
        }
      }
  
      function useNumberChar(){
        if(useNumber == true){
          let newNumber = numberChar[Math.floor(Math.random() * numberChar.length)]
          newPassword.push(newNumber)
        }else{
          charCount
        }
      }
  
      function useSpecialChar(){
        if(useSpecial == true){
          let newSpecial = specialChar[Math.floor(Math.random() * specialChar.length)]
          newPassword.push(newSpecial)
        }else{
          charCount
        }
      }

      
      do{

        let randomChar = [useUpperChar(), useLowerChar(), ,useNumberChar(), useSpecialChar()];
        
        newPassword.push(randomChar[Math.floor(Math.random() * randomChar.length)])

      }while(newPassword.length < charCount)
    
    return newPassword.toString().replaceAll(",", "")
  }

    //needs to return a value for the writePassword function
    return String(concatPassword())
}