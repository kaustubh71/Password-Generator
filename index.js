//defining characters for password in an array
let upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacter = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]
let random = []

//fetching values of paragraph from html
let outputPassword1 = document.querySelector("#output-password1")
let outputPassword2 = document.querySelector("#output-password2")
let outputPassword3 = document.querySelector("#output-password3")
let outputPassword4 = document.querySelector("#output-password4")

function generatePassword() {
    
    random = [] //to set array back to empty. this only work there is if statement in line 43. I still don't understand how this array is setting back to empty
    
    for (let i=0; i<4; i++) { // used for loop so that I can add 4 random characters from array upperCase[] 
        let formula1 = Math.floor(Math.random()*upperCase.length) //formula to get random index value from array upperCase[]
        random.push(upperCase[formula1]) // adding the randomly selected array from above formula in new array called random[]
    }
    
    for (let i=0; i<4; i++) { // used for loop so that I can add 4 random characters from array lowerCase[]    
        let formula2 = Math.floor(Math.random()*lowerCase.length) //formula to get random index value from array lowerCase[]
        random.push(lowerCase[formula2]) // adding the randomly selected array from above formula in new array called random[]
    }    
      
    for (let i=0; i<4; i++) { // used for loop so that I can add 4 random characters from array number[]
        let formula3 = Math.floor(Math.random()*number.length) //formula to get random index value from array number[]
        random.push(number[formula3]) // adding the randomly selected array from above formula in new array called random
    }  
     
    for (let i=0; i<4; i++) { // used for loop so that I can add 4 random characters from array specialCharacter[]   
        let formula4 = Math.floor(Math.random()*specialCharacter.length) //formula to get random index value from array specialCharacter[]
        random.push(specialCharacter[formula4]) // adding the randomly selected array from above formula in new array called random
    } 
    

    
    for (let i=0; i<random.length; i++)  { // used for loop to randomly select characters from array random[]
         let formula5 = Math.floor(Math.random()*random.length) //formula to randomly select index from array random[]
         let result = random[formula5] // to convert above selected index into character
        if (i===0) { 
            outputPassword1.textContent = ""
        } // I don't know why this if statement makes this code works. If I remove this it wont work
         outputPassword1.textContent += result //to output the result in the webpage
    }
    
     for (let i=0; i<random.length; i++)  { // used for loop to randomly select characters from array random[]
         let formula5 = Math.floor(Math.random()*random.length) //formula to randomly select index from array random[]
         let result = random[formula5] // to convert above selected index into character
         if (i===0) {
            outputPassword2.textContent = ""
        }
         outputPassword2.textContent += result //to output the result in the webpage
    }  
    
     for (let i=0; i<random.length; i++)  { // used for loop to randomly select characters from array random[]
         let formula5 = Math.floor(Math.random()*random.length) //formula to randomly select index from array random[]
         let result = random[formula5] // to convert above selected index into character
         if (i===0) {
            outputPassword3.textContent = "" 
        }
         outputPassword3.textContent += result //to output the result in the webpage
    } 
     
      for (let i=0; i<random.length; i++)  { // used for loop to randomly select characters from array random[]
         let formula5 = Math.floor(Math.random()*random.length) //formula to randomly select index from array random[]
         let result = random[formula5] // to convert above selected index into character
         if (i===0) {
            outputPassword4.textContent = "" 
        }
         outputPassword4.textContent += result //to output the result in the webpage
    }    
  
}

