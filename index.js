

var numOfButtons = document.querySelectorAll(".drum").length;

//Music by cliking 
for (i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumword = this.innerHTML;
        makesoud(drumword);
        addAnimation(drumword);
    });
}

// Music By keypress in keyboard
document.addEventListener("keydown", function(event){
    makesoud(event.key)
    addAnimation(event.key);
});

function makesoud(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom = new Audio('sounds/tom-1.mp3');
            tom.play();
            break;
        case "j":
            var tom = new Audio('sounds/tom-2.mp3');
            tom.play();
            break;
        case "k":
            var tom = new Audio('sounds/tom-3.mp3');
            tom.play();
            break;
        case "l":
            var tom = new Audio('sounds/tom-4.mp3');
            tom.play();
            break;
        default:
            console.log(drumword);
            break;
    }
}
function addAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}