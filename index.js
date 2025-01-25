var i;
//detecting button press
var numberOfDrums = document.querySelectorAll("button").length;
//for loop to axcess all buttons by index using querySelecterAll
for (i = 0;i<numberOfDrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        //alert("I got clicked");
        buttonAnimation(buttonInnerHTML);
    });
}

//for keyboard press
document.addEventListener("keypress", function(){
    makeSound(event.key);
    buttonAnimation(event.key);     
});



function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
} 

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}