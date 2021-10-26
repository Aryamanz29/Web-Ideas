alert("welcome to the game");

var randomNumber1=Math.floor(Math.random()*6)+1; //random no. from 1 to 6
var diceimg1="dice"+randomNumber1+".png";
var srcimg1="images/"+diceimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",srcimg1);

var randomNumber2=Math.floor(Math.random()*6)+1; //random no. from 1 to 6
var diceimg2="dice"+randomNumber2+".png";
var srcimg2="images/"+diceimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",srcimg2);