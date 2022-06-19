function getName(player){
    return window.prompt("Enter " + player + " name", player);
}

let player1 = null;
let player2 = null;
function mainFunction(){
    while(player1 == null){
        player1 = "Player1";
        player1 = getName(player1);
    }
    while(player2 == null){
        player2 = "Player2";
        player2 = getName(player2);
    }
    document.querySelectorAll(".player p")[0].textContent = player1;
    document.querySelectorAll(".player p")[1].textContent = player2;

    document.querySelector(".header button").style.display="none";
    document.querySelector(".header .desc").style.display="none";
    document.querySelector('.shuffle').style.display='flex';
}

function shuffling(){
    let val1 = Math.random()*6;
    val1 = Math.ceil(val1);
    let val2 = Math.random()*6;
    val2 = Math.ceil(val2);
    console.log(val1);
    console.log(val2);

    document.querySelectorAll(".img img")[0].setAttribute("src", "/images/"+val1+".png");    
    document.querySelectorAll(".img img")[1].setAttribute("src", "/images/"+val2+".png");

    let res = document.querySelector(".result");
    res.style.display='block';
    if(val1 === val2){
        res.textContent = "DRAW";
    } else if(val1 > val2){
        res.textContent = player1 + " wins..!"
    } else{
        res.textContent = player2 + " wins..!"
    }
}