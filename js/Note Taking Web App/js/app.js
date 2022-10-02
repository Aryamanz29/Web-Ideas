showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card " id="searchTxt" style="width: 18rem;text-align:center">
            <div class="card-body">
                <h5 class="card-title" style="text-align:center">Note ${index + 1}</h5>
                <p class="card-text"> ${element}</p>
                <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-danger note" style="width:100%">Delete Note </button>
            </div>
        </div>
        `;
  });

  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show! `;
  }
}

function deleteNode(index) {
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

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
        if(cardTxt.includes(inputVal) ||cardTxt.includes(inputVal.toLowerCase() ) || cardTxt.includes(inputVal.toUpperCase())){
            element.style.display = "block";
        }
        else{
            element.style.display ="none";
        }
    })
})
