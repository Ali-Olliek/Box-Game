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

function get_random_index() {
var random_index = Math.floor(Math.random()*4);
return(random_index);
}

// Choose box randomly

console.log(chosen_box);

var played_boxes = [];

for (i=0; i<4; i++) {
var box_index = get_random_index();
var boxes_list = ["box-1","box-2","box-3","box-4"];
var chosen_box = boxes_list[box_index]
played_boxes.push(chosen_box);

}
console.log(played_boxes);