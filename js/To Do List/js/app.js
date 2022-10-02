console.log("welcome");
showNotes();
let addBtn=document.getElementById("addbtn");
addBtn.addEventListener("click",function (e) {

    let addTxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if (notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
    
});
//function to show elements from local storage
function showNotes()
{
    let notes=localStorage.getItem("notes");
    if (notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function (arr,index) {
        html+=`
        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Notes ${index +1}</h5>
        <p class="card-text">${arr}</p>
        <button  id="${index}"onclick="deleteNote(this.id)" href="#" class="btn btn-primary">Delete</button>
        <button  id="${index}"onclick="markasimp(this.id)" href="#" class="btn btn-primary">Imp</button>
      </div>
      </div>`
        
    });

    let noteselm=document.getElementById('notes');
    if (notesObj.length!=0)
    {
        noteselm.innerHTML=html;
    }
    else{
        noteselm.innerHTML="No notes present";
    }

}


//function delete note
function deleteNote(index){
    console.log('i am deleting',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

search=document.getElementById("searchTxt");
search.addEventListener("input",function () {
    
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
});

function markasimp(index)
{
 
}