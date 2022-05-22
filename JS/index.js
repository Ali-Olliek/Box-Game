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


// Choose box randomly

// var choose_box = function() {

//         var played_boxes = [];
//         var level = 1

//         for (i=0; i<level; i++) {
//             var box_index = get_random_index();
//             var boxes_list = ['box1','box2','box3','box4'];
//             var chosen_box = boxes_list[box_index]
//             played_boxes.push(chosen_box);
//         }
//         console.log("played_boxes: "+played_boxes);
//     }
var played_boxes = [];
console.log("playedboxes"+played_boxes)

var play_box = function() {
    random_index = get_random_index()
    var boxes_list = ['box1','box2','box3','box4'];
    box_to_play = boxes_list[random_index]
    played_boxes.push(box_to_play);
    console.log(played_boxes)
    return played_boxes;

}

var animate_box = function() {
    boxes_to_animate = play_box()
    console.log("boxes to animate: "+boxes_to_animate)
    for (var i = 0;i<boxes_to_animate.length;i++){
        console.log("forloop")
        document.getElementById(boxes_to_animate[i]).style.animation = "box2 0.5s 1";
    }
}

document.addEventListener("keyup", (e) => { 
    if (e.code === "Space") {
         
    animate_box()
    
    }
});

// Global Variables
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var playing = false;

var random_index = get_random_index()
console.log(random_index)