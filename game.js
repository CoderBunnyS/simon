var buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 4));
    let randomColor = buttonColors[randomNumber]
    console.log(randomColor)
    gamePattern.push(randomColor)
    console.log(gamePattern)
    $("#" + randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor)
    
}

$(".btn").on("click", function(event){
    userChosenColour = event.target.id
    console.log(userChosenColour)
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound(userChosenColour)
})

function playSound(sound) {
    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
    var player = new Audio("./sounds" + userChosenColour + ".mp3")
    audio.play();
}

function animatePress(currentColor) {
    
}
