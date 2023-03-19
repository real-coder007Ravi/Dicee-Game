var randomNumber1 =Math.floor(Math.random()*6)+1;
var res1="dice"+ randomNumber1 +".png";
var resSource="images/"+res1;

document.querySelectorAll("img")[0].setAttribute("src",resSource);
var randomNumber2 =Math.floor(Math.random()*6)+1;
var res2="dice"+ randomNumber2 +".png";
var res2Source="images/"+res2;

document.querySelectorAll("img")[1].setAttribute("src",res2Source);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}