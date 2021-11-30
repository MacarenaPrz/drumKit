// Iteración para agregar un evento a cada botón del kit
//Detectar que botón fue presionado
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//    Variable que contiene la tecla que dispara el evento.
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

//    Detectar que tecla es presionada.
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Función que va a responder a los eventos de mouse/teclado
function makeSound(key){
    //    Switch para evaluar que sonido tocar dependiendo de la letra presionada.
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
        case "d":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            
        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
        default: console.log(buttonInnerHTML);
            break;
    }

}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
