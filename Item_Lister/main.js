var form = document.querySelector("form");
var itemList= document.querySelector("#items");
var input = document.querySelector("#item");
var search = document.querySelector("#filter");

form.addEventListener("submit",addItem);

itemList.addEventListener("click",removeItem);

search.addEventListener("keyup",filter);




//Add Item to List
function addItem(e){
    e.preventDefault();
    var item = input.value;
    if(item!=""){
        var li = document.createElement("li");
        li.className="list-group-item";
        li.appendChild(document.createTextNode(item));
        var delBtn = document.createElement("button");
        delBtn.className="btn btn-danger btn-sm float-right delete";
        delBtn.appendChild(document.createTextNode("X"));
        li.appendChild(delBtn);
        itemList.appendChild(li);
        input.value="";
    }else{
        alert("Invalid Item");
    }
    
}

//Remove Item from List
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you 100% sure ?")){
            var li = e.target.parentElement;
            itemList.removeChild(li); 
        }
    }
}

//Filter the items form the list
function filter(e){
    var valueToSearch = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li");
    var toArray = Array.from(items);
    toArray.forEach(function(item){
        var itemName=item.firstChild.textContent.toLowerCase();
        if(itemName.includes(valueToSearch)){
           item.style.display="block";
       }else{
        item.style.display="none";
       }
    })
}