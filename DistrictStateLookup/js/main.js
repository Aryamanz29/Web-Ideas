const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

//Search states.json and filter

const searchStates =  searchText =>{

         fetch("../data/states.json")
        .then( res => res.json())
        .then( data => {

            const arr_objs = data.states;
            let output="";
            arr_objs.forEach( (obj) =>{
                const regex = new RegExp(`^${searchText}`,"gi");
                const districts = obj.districts;
                const matching_dists = districts.filter( (district) =>{
                    return district.match(regex);
                })

                if(matching_dists.length>0){
                    matching_dists.forEach( (district)=>{
                        output+=
                        `
                        <div class="card">
                        <h2>${district} <span class="stateName">${obj.state}</span></h2>
                        </div>
                        `
                    })
                }
                
            })
            //Show result in HTML
            if(searchText==""){
                matching_dists=[];
                output="";
            }
            matchList.innerHTML = output;
            
        })
    };

//Debouncing
const debounce = (fun, delay) => {
    let timer;
    return function(){
        const context = this
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun.apply(context, args)
        },delay)
    }
}

search.addEventListener("input",
debounce(function(){
    searchStates(search.value)
},400)
   
    
);
