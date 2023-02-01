const keys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.querySelector("#btn");
let passEl1 = document.querySelector("#input1");
let passEl2 = document.querySelector("#input2");

btn.addEventListener("click", function(evt) {
    
    passEl1.value = "";
    passEl2.value = "";
    for(let i = 0; i < 15; i++) {
        let random1 = Math.floor(Math.random() * keys.length);
        let random2 = Math.floor(Math.random() * keys.length);
        passEl1.value += keys[random1];
        passEl2.value += keys[random2];
    }
})

