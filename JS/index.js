// Game Layout - Psuedo Code

// Event: "Spacebar" --> Playing=True;
// While Playing {}
// --- Boxes-list = [box-1,box-2,box-3,box-4]
// --- Randomly select a number from 0 to 4, this will be a get-box-index
// --- Boxes-list[get-box-index]
// --- Add number to played-boxes-list = [...]
// --- Play-boxes {}
// ------ do animation of boxes for a length of played-boxes-list
// ------ index of the box:
// ---------Changes: plays sound, changes color to grey
// --- Eventlistener: click on boxes:
// --- add box-clicked to boxes-guessed [...]
// --- if boxes-guessed == played-boxes-list:
// --- Playing = True
// --- Level + 1
// --- (We then start again but instead of zero-ing the played-boxes-list we append to it)
// --- else: playing = False. Display lose animation (red background, display You Lost! message)

//get random index

var get_random_index = function () {
    var random_index = Math.floor(Math.random()*4);
    return(random_index);
    }

// Global Variables

var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var game_prompt= document.getElementById('game_prompt')
var audio1 = new Audio ("Assets/sounds/sounds/red.mp3")
var audio2 = new Audio ("Assets/sounds/sounds/green.mp3")
var audio3 = new Audio ("Assets/sounds/sounds/blue.mp3")
var audio4 = new Audio ("Assets/sounds/sounds/yellow.mp3")
var random_index = get_random_index()
var boxes_list = ['box1','box2','box3','box4']
var boxes_list_2 = document.getElementsByClassName('box')
level = 0;

var played_boxes = [];

var choose_box = function() {
    random_index = get_random_index()
    box_to_play = boxes_list[random_index]
    played_boxes.push(box_to_play);
    return played_boxes
}

var play_box = function() {
        for(let i=0;i<played_boxes.length;i++){ 
        game_prompt.innerHTML = "LEVEL: " + (i+1);
            if (played_boxes[i] == "box1") {
              box1.setAttribute("class", "box box-1 grey_box");
              setTimeout(() => {
                box1.classList.remove("grey_box");
                audio1.play();
              }, (500 * i) / 5 - i);
            } 
            else if (played_boxes[i] == "box2") {
              box2.setAttribute("class", "box box-2 grey_box");
              setTimeout(() => {
                box2.classList.remove("grey_box");
                audio2.play();
              }, (500 * i) / 5 - i);
            } 
            else if (played_boxes[i] == "box3") {
              box3.setAttribute("class", "box box-3 grey_box");
              setTimeout(() => {
                box3.classList.remove("grey_box");
                audio3.play();
              }, 500 * i/5-i);
            }

            else {
                box4.setAttribute("class", "box box-4 grey_box");
                setTimeout(() => {box4.classList.remove("grey_box");
                audio4.play();}, 500 * i/5-i);
        }
        
        }
}

var user_plays = function () {
} 

var add_to_list = function() {
    var box1_EL = box1.addEventListener('click', boxes_guessed.push())
    var box2_EL = box2.addEventListener('click', boxes_guessed.push())
    var box3_EL = box3.addEventListener('click', boxes_guessed.push())
    var box4_EL = box4.addEventListener('click', boxes_guessed.push())
    boxes_guessed = []
    boxes_guessed.push(user_plays())
    console.log(boxes_guessed)

}

var you_won = function() {
    level++
    document.body.style.backgroundColor = "green";
    
}

var you_lost = function () {
    message.innerHTML = "YOU LOST! PRESS SPACEBAR TO RESET";
    document.body.style.backgroundColor = "red";
}

document.addEventListener("keyup", (e) => { 
    if (e.code === "Space") {
        choose_box()
        console.log(played_boxes)
        play_box()
        user_plays()

}})