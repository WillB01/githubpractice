//get name of the note
let nameOfNote = document.querySelector('#note-name input');
//get note value
let valueOfNote = document.querySelector('#note-text input');
//get search for note value
let searchForNote = document.querySelector('#search-note input');
//where notes will be printed
let printNote = document.querySelector('#search-content');
//add notes and name btn
let btnAdd = document.querySelector('#add-btn');
//searches notes of name btn
let btnSearch = document.querySelector('#search-btn');
//search value
let searchInput = document.querySelector('#search-text');

//calling the funtions
saveNotes();

function saveNotes(){
    let noteNameList = [];
    let noteValueList = [];
    let user = [];
    let id = 0;
    function Person(name, note, id){
        this.name = name;
        this.note = note;
        this.id = id;
    }
    btnAdd.addEventListener('click',function(){
        id++;
        var newPerson = new Person(`${nameOfNote.value.toUpperCase()}`,`${valueOfNote.value}`,id);
        user.push(newPerson);
    
    });
    searchNotes(user);
    
};

function searchNotes(u){
    btnSearch.addEventListener('click', function(){
        let userSearch = searchInput.value.toUpperCase();
        for(let i = 0; i <= u.length - 1; i++){
           if(userSearch === u[i].name){
            printNote.innerHTML = (`<h2>${u[i].name}</h2>
            <li>${u[i].note}`);
           };
        }
    });
};



