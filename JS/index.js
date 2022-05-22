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
var audio1 = new Audio ("Assets/sounds/sounds/red.mp3")
var audio2 = new Audio ("Assets/sounds/sounds/green.mp3")
var audio3 = new Audio ("Assets/sounds/sounds/blue.mp3")
var audio4 = new Audio ("Assets/sounds/sounds/yellow.mp3")
var playing = false;
var random_index = get_random_index()
var boxes_list = ['box1','box2','box3','box4']
var played_boxes = [];

var choose_box = function() {
    random_index = get_random_index()
    box_to_play = boxes_list[random_index]
    played_boxes.push(box_to_play);
    return played_boxes
    

}

var play_box = function(){
        for(let i=0;i<played_boxes.length;i++){
            console.log('outside')

                if(played_boxes[i]=='box1'){
                document.getElementById("box1").style.animation =
                  "box 1 linear 1";
                audio1.play();
                audio1.pause();
                setTimeout(() => {
                  audio1.play();
                }, 1000);
                
            }

            console.log("in timeout")
              if (played_boxes[i] == "box2") {
                audio2.play();
                audio2.pause();
                setTimeout(() => {
                  audio2.play();
                }, 1000);
                document.getElementById("box2").style.animation =
                  "box 1 linear 1";
              }
            
              if (played_boxes[i] == "box3") {
                audio3.play();
                audio3.pause();
                setTimeout(() => {audio3.play();
                }, 1000);
                document.getElementById("box3").style.animation =
                  "box 1 linear 1";
              }

              if (played_boxes[i] == "box4") {
                audio4.play();
                audio4.pause();
                setTimeout(() => {
                  audio4.play();
                }, 1000);
                document.getElementById("box1").style.animation =
                  "box 1 linear 1";
              }
            console.log("this is i:  " +i)
            
        }
    }

document.addEventListener("keyup", (e) => { 
    if (e.code === "Space") {
        choose_box()
        play_box()
        console.log(played_boxes)
        
        
        
}})

    clearInterval(boxes_sounds);

    
