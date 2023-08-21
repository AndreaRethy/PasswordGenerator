const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let generateBtn = document.getElementById("btn")
let copyBtn1 = document.getElementById("copy-btn1")
let copyBtn2 = document.getElementById("copy-btn2")
let feedback1 = document.getElementById("feedback1")
let feedback2 = document.getElementById("feedback2")

generateBtn.addEventListener("click", function() {

    let passwordLength = document.getElementById("characterLenght").value
    password1.innerText = ""
    password2.innerText = ""
    feedback1.innerText = ""
    feedback2.innerText = ""

    for (i = 0; i < passwordLength; i++) {
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        let randomLetter1 = characters[randomNumber1]
        password1.innerText += randomLetter1

        let randomNumber2 = Math.floor(Math.random() * characters.length)
        let randomLetter2 = characters[randomNumber2]
        password2.innerText += randomLetter2
    }
})

    copyBtn1.addEventListener("click", function() {
        if (password1.innerText != "") {
            navigator.clipboard.writeText(password1.innerText)
            feedback1.innerText = "Password copied to clipboard"

            setTimeout(function() {
                feedback1.innerText = ""
            }, 3000);
        } else {
            feedback1.innerText = "Password field is empty!"
        }
    })

    copyBtn2.addEventListener("click", function() {
        if (password2.innerText != "") {
            navigator.clipboard.writeText(password2.innerText)
            feedback2.innerText = "Password copied to clipboard"

            setTimeout(function() {
                feedback2.innerText = ""
            }, 2000);
        } else {
            feedback2.innerText = "Password field is empty!"
        }
    })


