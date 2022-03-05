// document.querySelector() se usa para seleccionar elementos por ID
let captchaText = document.querySelector('#captcha');

var ctx = captchaText.getContext("2d");

ctx.font = "30px Roboto";

ctx.fillStyle = "#d12313";


let userText = document.querySelector('#textBox');

let submitButton = document.querySelector('#submitButton');

let output = document.querySelector('#output');

let refreshButton = document.querySelector('#refreshButton');

//alphaNums tiene los caracteres que se incluiran en el captcha
let alphaNums =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let emptyArr = [];

//Ciclo que genera un string de 7 characteres, el cual será usado como captcha
for (let i = 1; i <= 8; i++){
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}

var c = emptyArr.join('');

ctx.fillText(emptyArr.join(''), captchaText.width/4, captchaText.height/2);

// Cuando se presiona el boton de "Enter", se valida el captcha y se muestra la respuesta apropiada, y se redirecciona a otra página html
userText.addEventListener('keyup', function(e) {
    // Valor del boton "Enter" es 13
    if (e.keyCode === 13) {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
            window.location.href = "/home.html";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

//Cuando se hace click en submit, se valida el captcha y se muestra la respuesta apropiada, y se redirecciona a otra página html
submitButton.addEventListener('click', function() {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correct!";
        window.location.href = "/home.html";
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again";
    }
});
   
// Cuando se hace click en el boton de refresh se vuelve a hacer un nuevo captcha
refreshButton.addEventListener('click', function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''), captchaText.width/4, captchaText.height/2);
    output.innerHTML = "";
});