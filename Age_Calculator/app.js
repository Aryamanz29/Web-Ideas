const btn = document.querySelector("#btn");
const dob = document.querySelector("#date");
const output_years = document.querySelector(".box1 h2");
const output_months = document.querySelector(".box2 h2");
const output_days = document.querySelector(".box3 h2");


btn.addEventListener("click",()=>{
    var t_day,t_month,t_year;
    var today= new Date();
    t_day=  today.getDate();
    t_month= today.getMonth()+1;
    t_year= today.getFullYear();
    var dob_details = dob.value;
    var b_year, b_month, b_day;
    b_year = dob_details.slice(0,4);
    b_month = dob_details.slice(5,7);
    b_day = dob_details.slice(8,10);
    calOfAge(b_year, b_month, b_day, t_year, t_month, t_day)
});



function  calOfAge(b_year, b_month, b_day, t_year, t_month, t_day){
    //validation 
    if(dob.value===''){
        alert('Please enter DOB');
    }
    else if((b_year>t_year) || (b_year==t_year && b_month>t_month) || (b_year==t_year && b_month==t_month && b_day>t_day)){
        alert("Invalid details");
    }
    else{
        
        var month=[31,28,31,30,31,30,31,31,30,31,30,31];
        var years,months,days;
        if(t_day>=b_day){
            days=t_day-b_day;
        }else{
            t_day=t_day+month[t_month+1];
            t_month=t_month-1;
            days=t_day-b_day;
        }
        if(t_month>=b_month){
            months=t_month-b_month;
        }else{
            t_month=t_month+12;
            t_year=t_year-1;
            months=t_month-b_month;
        }
        years=t_year-b_year;
        output_years.textContent=years;
        output_months.textContent=months;
        output_days.textContent=days;
    }
    
 }



//Toggle theme
const theme = document.querySelector(".checkbox");
theme.addEventListener('change',()=>{
    if(theme.checked){
        var r = document.querySelector(':root');
        r.style.setProperty('--primary-color', '#1a1c20');
        r.style.setProperty('--secondary-color', '#fff');
        r.style.setProperty('--ternary-color', '#536162');
    }else{
        var r = document.querySelector(':root');
        r.style.setProperty('--primary-color', '#94d0cc');
        r.style.setProperty('--secondary-color', '#1b1a17');
        r.style.setProperty('--ternary-color', '#02475e');
    }
    

});