let count= 0,x=0,flipcount=20,hintcount=3,complete=0;
let prev,curr,prevc,currc;
const button=document.querySelectorAll('.btn');
const btn=document.querySelector('.btn');
const hintBtn=document.querySelector('.hintBtn');
const fcount = document.querySelector('.fcount');
const hcount = document.querySelector('.hcount');
const myrules = document.querySelector('.myrules');
const highest=document.querySelector('.highest');;
let a = [
    'A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'
];
if(!localStorage.getItem('score'))
{
    localStorage.setItem('score',0);
}
highest.textContent = `${localStorage.getItem('score')}`;
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
button.forEach(function(btn) {
    btn.style.backgroundColor="white";
    btn.textContent=a[x];
    x=x+1;
});
myrules.addEventListener("click",function(){
    alert('1.You have to select two matching pairs by memorizing the locations of the cards \r\n2.You can do 20 flips of cards  \r\n3.You have 3 hints to view the cards (But with every hint used the flips left reduces by 1) \r\n4.Lets go!! ')
});

hcount.textContent = hintcount;
hintBtn.addEventListener("click",function(){

    if(hintcount>0)
    {
    button.forEach(function(btn) {
        if(btn.style.backgroundColor=="white")
        {
    btn.style.backgroundColor="black"; }
    });

    setTimeout(()=> {
        button.forEach(function(btn) {
            if(btn.style.backgroundColor=="black")
            {
        btn.style.backgroundColor="white"; 
    }}); }
        ,1300);
    
    hintcount = hintcount - 1;
    hcount.textContent = hintcount;
    flipcount = flipcount - 1;
    fcount.textContent= flipcount;
    }
    else{
        if(hintBtn.textContent!="Reset")
        {
        alert('Oops!! Out of Hints..., But dont lose hope continue trying without hints');
        }
        
    }
    if(hintcount==0)
    hintBtn.style.color="gray";
});
    
button.forEach(function(btn) {
    
    btn.addEventListener("click",function(){
        count=count + 1;
        if(count < 3 )
        {
            btn.style.backgroundColor="black";
            btn.style.color="white";
            btn.disabled= true;
        }
       
        if(count==1)
        {   
        prev = btn.textContent;
        prevc = btn;
        }
        if(count==2)
        {
        curr =btn.textContent;
        currc = btn;
            if(prev != curr)
            {
            setTimeout(()=> {
            prevc.style.backgroundColor="white";
            currc.style.backgroundColor="white";
            count=0;
            },600);
            currc.disabled= false;
            prevc.disabled= false;
            flipcount--;
            fcount.textContent= flipcount;
            if(flipcount==0)
            {
                alert('Oops! Out of Flips, Better luck next time!');

                    hintBtn.style.backgroundColor="blue";
                    hintBtn.style.color="white";
                    hintBtn.textContent="Reset";
                    hintBtn.addEventListener("click",function(){
                        location.reload();
                    });
                    button.forEach(function(btn) {
                        btn.disabled = true;
                    });
            }
            }
            else{
            setTimeout(()=> {
                prevc.style.backgroundColor="red";
                currc.style.backgroundColor="red";
                count=0;
                },600);
                complete = complete+1;
                if(complete==8)
                {
                    setTimeout(()=> {alert(`You Won!`)},1000);
                    hintBtn.style.backgroundColor="blue";
                    hintBtn.style.color="white";
                    hintBtn.textContent="Reset";
                    if(flipcount>localStorage.getItem('score'));
                    {
                    localStorage.removeItem('score');
                    localStorage.setItem('score',flipcount);
                    }
                    hintBtn.addEventListener("click",function(){
                        location.reload();
                    });
                }
                
            }
        
        }
    });
});
