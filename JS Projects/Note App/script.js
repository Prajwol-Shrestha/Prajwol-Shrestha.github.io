const addBtn = document.querySelector('#addBtn');

showNotes();


addBtn.addEventListener('click', (e) => {
    let addTxt = document.querySelector('#addText');

    let localNotes = localStorage.getItem('notes');

    if (localNotes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(localNotes);
    }

    if (addTxt.value != '') {
        notesArr.push(addTxt.value);
    }
    else {
        alert('Notthing to Add');
    }

    localStorage.setItem('notes', JSON.stringify(notesArr));

    addTxt.value = '';

    showNotes();
});




function showNotes() {
    let localNotes = localStorage.getItem('notes');

    if (localNotes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(localNotes);
    }

    let html = '';

    notesArr.forEach((note, index) => {
        html += `
                     <div class="noteCard card m-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${note} </p>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete Note </button>
                        </div>
                    </div>
                `
    });
    let notesEl = document.querySelector('#notes');

    if (notesArr.length != 0) {
        notesEl.innerHTML = html;
    }
    else {
        notesEl.innerHTML = 'No Notes Yet';
    }
}



function deleteNote(index){
    let localNotes = localStorage.getItem('notes');

    if (localNotes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(localNotes);
    }

    notesArr.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArr));

    showNotes();
}


const search = document.querySelector('#searchTxt');
search.addEventListener("input", () => {
    let inputVal = search.value.toLowerCase();

    let noteCards = document.querySelectorAll('.noteCard');
    Array.from(noteCards).forEach(element => {
        let cardTxt = element.querySelector('p').innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";          
        }
    })
})
