const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    for (i = 0; i < passwordLength; i++) {
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        let randomLetter1 = characters[randomNumber1]
        password1.innerText += randomLetter1

        let randomNumber2 = Math.floor(Math.random() * characters.length)
        let randomLetter2 = characters[randomNumber2]
        password2.innerText += randomLetter2
    }
})