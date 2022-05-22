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

var boxes_list = document.getElementsByClassName("box")
var audio1 = new Audio ("Assets/sounds/sounds/red.mp3")
var audio2 = new Audio ("Assets/sounds/sounds/green.mp3")
var audio3 = new Audio ("Assets/sounds/sounds/blue.mp3")
var audio4 = new Audio ("Assets/sounds/sounds/yellow.mp3")
var playing = false;
var random_index = get_random_index()




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

var play_box = function() {
    random_index = get_random_index()
    box_to_play = boxes_list[random_index]
    played_boxes.push(box_to_play);
    return played_boxes

}


document.addEventListener("keyup", (e) => { 
    if (e.code === "Space") {
        
        var test=play_box()
        console.log(test)
    }
});



// var animate_box = function(box) {
//     boxes_to_animate=[]
//     boxes_to_animate.push(play_box())
//     for (var i = 0;i<boxes_to_animate.length;i++){    
//         boxes_to_animate[i];
//         }
//     }
