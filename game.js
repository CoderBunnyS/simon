var buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
let gameStarted = false;
var level = 0;

function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 4));
    let randomColor = buttonColors[randomNumber]
    console.log(randomColor)
    gamePattern.push(randomColor)
    console.log(gamePattern)
    $("#" + randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor)
    level++
    $("#level-title").text("Level " + level);
}

$(".btn").on("click", function(event){
    userChosenColour = event.target.id
    //console.log(userChosenColour)
    userClickedPattern.push(userChosenColour)
    //console.log(userClickedPattern)
    playSound(userChosenColour)
    animatePress(userChosenColour);
    let lastColor = userClickedPattern[userClickedPattern.length - 1];
    checkAnswer(lastColor);
    console.log(lastColor)
})

function playSound(sound) {
    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
    //var player = new Audio("./sounds" + userChosenColour + ".mp3")
    //audio.play();
}
   
function animatePress(currentColor){
   
      $('#' + currentColor).addClass("pressed");
      setTimeout(function (){
          $("#"+ currentColor).removeClass("pressed")
      },100)
  };
  $(document).keypress(function(event) {
      nextSequence()
  })

$("document").keypress(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function checkAnswer(currentLevel){
    
}
