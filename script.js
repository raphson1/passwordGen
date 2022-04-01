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

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function isValidLengh(n){
  return isNumeric(n) && n >= 8 && n <= 128;

}

function generatePassword(){
    var passwordcriteria = {}
    passwordcriteria["len"] = prompt("Enter the password lenght: ");
   if (isValidLengh(passwordcriteria["len"])=== false){
     alert("Please Enter a number between 8 and 128")
     return "";

   }
    passwordcriteria["upper"]= confirm("Do you want an upper case in your password?");    
    passwordcriteria["lower"]= confirm("Do you want a lower case in Your password");
    passwordcriteria["number"] = confirm("Do you want a number in your password");
    passwordcriteria["special"] = confirm("Do you want a special caracter in your password?");

    if (!passwordcriteria["upper"] && !passwordcriteria["lower"] && !passwordcriteria["number"] && !passwordcriteria["special"]){
      alert("Please select atleast one type of Character")
      return "";

    }

    return createPassword(passwordcriteria);  
    
}

function getRandom(n){
  return Math.floor(Math.random() * n);
}


function createPassword(passwordOptions){
  var password = Array(Number(passwordOptions["len"]));
  var index = 0;
  if (passwordOptions["upper"]=== true){
    var letter = getRandom(26)
    password[index] = String.fromCharCode("A".charCodeAt(0) +letter);
    index++
  }

  if (passwordOptions["lower"]=== true){
     var letter = getRandom(26)
     password[index] = String.fromCharCode("a".charCodeAt(0) +letter);
     index++
  }

  if (passwordOptions["number"] === true){
    var number =getRandom(10)
    password[index] = number;
    index++
  }
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  if (passwordOptions["special"] === true){
    var special = specialCharacters[getRandom(specialCharacters.length)];
    password[index] = special;
    index++
  }
  var upperCasesArray = Array(26).fill(0).map((x,i)=>i+65);
  var upperCases = String.fromCharCode(...upperCasesArray)
  var lowerCasesArray = Array(26).fill(0).map((x,i)=>i+97);
  var lowerCases = String.fromCharCode(...lowerCasesArray);
  var numberArray = Array(10).fill(0).map((x,i)=>i+48);
  var numbers = String.fromCharCode(...numberArray);
  var combination =""
   if (passwordOptions["upper"] === true){
      combination = combination + upperCases;
   }

   if (passwordOptions["lower"] === true){
       combination = combination + lowerCases;
   }

   if (passwordOptions["number"] === true){
      combination = combination + numbers;
   }
   if (passwordOptions["special"] === true){
    combination = combination + specialCharacters;
   }
  for (; index < passwordOptions["len"]; index++){
    var character = combination[getRandom(combination.length)];
    password[index] = character;

  }
  password = shuffle(password)
  
  return password.join("");
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}







