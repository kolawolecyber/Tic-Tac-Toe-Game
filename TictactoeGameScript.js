const playerText=document.getElementById("playerText");
const computerText=document.getElementById("computerText");
const resultText=document.getElementById("resultText");
const choiceButton = document.querySelectorAll(".gameButton");


let player;
let computer;


choiceButton.forEach(button =>button.addEventListener("click", ()=>{
player=button.textContent;
computerTurn();
playerText.textContent="Player: "+ player;
computerText.textContent="Computer: "+ computer;
resultText.textContent=resultstatus();
}));
function computerTurn(){
    const randNm=Math.floor(Math.random()*3)+1;
    switch (randNm){
        case 1:
            computer="ROCK";
            break;
            case 2:
                computer="PAPER";
                break;
                case 3:
                    computer="SCISSORS";
                    break;
    }
}
function resultstatus(){
     if (player==computer){
        return "Draw!";
     }
        else if (player=="ROCK")
        {
return (computer="SCISSORS")? "You Win!":"You Loose!";
        }
        else if (player=="SCISSORS"){
        return (computer=="PAPPER")? "You Win!":"You Loose!";
     }
     else if (player=="PAPER")
     {
        return (computer=="ROCK") ? "You Win!":"You Loose!";
     }
    }

    let user = {
        name:'cyber',
        age:30,
        email:'cyber@gmail.com',
        location:'Iwo',
        blogs:['cyber is the best', 'we rock it '],
        login: function(){
            console.log('You successfully Login');
        },
         logout: function(){
            console.log('You Succcessfully Logged out');
         }, 
         blogsMethod: function(){
            console.log(this.blogs)
            this.blogs.forEach(blog=>{
                console.log(blog)
            });
         }
    };
    console.log(user);
    console.log(user.name);
    //using array notation to declare or call function
    console.log(user['age']);
    console.log(typeof user);

    user.login();
    user.logout();
    user.blogsMethod();
    console.log(user.blogs[0]);