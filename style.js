let player2Score = 1;
let player1Score = 1;

let score1= document.getElementById('player1Score');
let score2 = document.getElementById('player2Score');
const button1 =document.querySelectorAll('.selection button');
const button2 =document.querySelectorAll('.selection button');
const showicon1 = document.querySelector('.show i');
const showicon2  = document.querySelector('.ply1 i');
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const btn =[document.getElementById('rock'),document.getElementById('paper'),document.getElementById('scissors')]
const game = () => {
    button2.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            let clickedBtn2 = e.target.className; 
            showicon2.className = clickedBtn2;
        });

    });
    button1.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        
           let clickedBtn = e.target.className;
           showicon1.className = clickedBtn;
        });
    });
           
    if(showicon1.className === showicon2.className){
        score1.innerHTML = score1.innerHTML;
        score2.innerHTML = score2.innerHTML;
        text.innerHTML = "It's a Tie ! ";
        text.style.color = 'orange';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'orange';
        }
            // if it's not a Tie.
     else if(showicon1.className === randomClasses[0] && showicon2.className === randomClasses[2]){
        score1.innerHTML = player1Score;
        player1Score++;
        text.innerHTML = "player 1 Won ! ";
        text.style.color = 'rgb(1, 146, 1)';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'rgb(1, 146, 1)';
        }
    else if(showicon1.className === randomClasses[0] && showicon2.className === randomClasses[1]){
        score2.innerHTML = player2Score;
        player2Score++;
        text.innerHTML = "player 1 u Loosed ! ";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
        }
    else if(showicon1.className === randomClasses[1] && showicon2.className === randomClasses[2]){
        score2.innerHTML = player2Score;
        player2Score++;
        text.innerHTML = "player 1 Loosed ! ";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
        }
    else if(showicon1.className === randomClasses[1] && showicon2.className === randomClasses[0]){
        score1.innerHTML = player1Score;
        player1Score++;
        text.innerHTML = "player 1 u Won ! ";
        text.style.color = 'rgb(1, 146, 1)';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'rgb(1, 146, 1)';
        }
    else if(showicon1.className === randomClasses[2] && showicon2.className === randomClasses[0]){
        score2.innerHTML = player2Score;
        player2Score++;
        text.innerHTML = "player 2 u won ";
        text.style.color = 'red';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'red';
        }
    else if(showicon1.className === randomClasses[2] && showicon2.className === randomClasses[1]){
        score1.innerHTML = player1Score;
        player1Score++;
        text.innerHTML = "player 2 loose ";
        text.style.color = 'rgb(1, 146, 1)';
        text2.innerHTML = text.innerHTML;
        text2.style.color = 'rgb(1, 146, 1)';
        }
     
 
}
game();

