const btn= document.querySelectorAll('.btn');
const button= document.querySelector('.btn');
const skipmain= document.querySelector('.skipmain');
const btncheck1= document.querySelectorAll('.btncheck1');
const buttoncheck1= document.querySelector('.btncheck1');
const btncheck2= document.querySelectorAll('.btncheck2');
const buttoncheck2= document.querySelector('.btncheck2');
const btncheck3= document.querySelectorAll('.btncheck3');
const buttoncheck3= document.querySelector('.btncheck3');
const btncheck4= document.querySelectorAll('.btncheck4');
const buttoncheck4= document.querySelector('.btncheck4');
const skip1yes= document.querySelector('.skip1yes');
const skip2yes= document.querySelector('.skip2yes');
const skip3yes= document.querySelector('.skip3yes');
const skip4yes= document.querySelector('.skip4yes');
const skip1no= document.querySelector('.skip1no');
const skip2no= document.querySelector('.skip2no');
const skip3no= document.querySelector('.skip3no');
const skip4no= document.querySelector('.skip4no');
const anspage=document.querySelector('.anspage');
const page1= document.querySelector('.page1');
const page2=document.querySelector('.page2');
const page3=document.querySelector('.page3');
const page4=document.querySelector('.page4');
const page5=document.querySelector('.page5');
page2.style.display= 'none';
page3.style.display= 'none';
page4.style.display= 'none';
page5.style.display= 'none';
anspage.style.display= 'none';
let i=0;
let a = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
];
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
const b=a;
btn.forEach(function(button) {
        button.style.backgroundImage = `url('images/${b[i++]}.png')`;
        button.disabled= true;
});
skipmain.addEventListener("click",function(){
    page1.style.display= 'none';
    page2.style.display= 'grid';
});
i=0;
btncheck1.forEach(function(buttoncheck1) {
    buttoncheck1.style.backgroundImage = `url('images/${b[i]}.png')`;
    i=i+2;
    buttoncheck1.disabled= true;
});
i=1;
btncheck2.forEach(function(buttoncheck2) {
    buttoncheck2.style.backgroundImage = `url('images/${b[i]}.png')`;
    if(i%2==0)
    {
    i=i+3;
    }
    else{
        i++;
    }
    buttoncheck2.disabled= true;
});
i=3;
btncheck3.forEach(function(buttoncheck3) {
    buttoncheck3.style.backgroundImage = `url('images/${b[i]}.png')`;
    if(i==6)
    {
    i=i+5;
    }
    else
    { i++; }
    buttoncheck3.disabled= true;
});
i=7;
btncheck4.forEach(function(buttoncheck4) {
    buttoncheck4.style.backgroundImage = `url('images/${b[i]}.png')`;
    i=i+1;
    buttoncheck4.disabled= true;
});

let finalans= -1;
skip1yes.addEventListener("click",function(){
    finalans= finalans + 1;
    document.querySelector('.ansbtn').style.backgroundImage=`url('images/${b[finalans]}.png')`;
    skip1yes.disabled= true;
    page2.style.display= 'none';
    page3.style.display= 'grid';
    
});

skip2yes.addEventListener("click",function(){
    finalans= finalans + 2;
    document.querySelector('.ansbtn').style.backgroundImage=`url('images/${b[finalans]}.png')`;
    skip2yes.disabled= true;
    page3.style.display= 'none';
    page4.style.display= 'grid';
   
});

skip3yes.addEventListener("click",function(){
    finalans= finalans + 4;
    document.querySelector('.ansbtn').style.backgroundImage=`url('images/${b[finalans]}.png')`;
    skip3yes.disabled= true;
    page4.style.display= 'none';
    page5.style.display= 'grid';
    
});

skip4yes.addEventListener("click",function(){
    finalans = finalans + 8;
    document.querySelector('.ansbtn').style.backgroundImage=`url('images/${b[finalans]}.png')`;
    skip4yes.disabled= true;
    page5.style.display= 'none';
    anspage.style.display= 'grid';
});


skip1no.addEventListener("click",function(){
    skip1yes.disabled= true;
    page2.style.display= 'none';
    page3.style.display= 'grid';
    
});

skip2no.addEventListener("click",function(){
    skip2yes.disabled= true;
    page3.style.display= 'none';
    page4.style.display= 'grid';
   
});

skip3no.addEventListener("click",function(){
    skip3yes.disabled= true;
    page4.style.display= 'none';
    page5.style.display= 'grid';
    
});

skip4no.addEventListener("click",function(){
    skip4yes.disabled= true;
    page5.style.display= 'none';
    anspage.style.display= 'grid';
});
