import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://url-tracker-app-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");

const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {

    console.log(inputEl.value);
    inputEl.value = "";

});

deleteBtn.addEventListener("dblclick", function() {

});

function render(URLs) {
    
    let listItems = "";
    
    for (let i = 0; i < URLs.length; i++) {
        listItems += `
        <li> 
            <a target = '_blank' href='${URLs[i]}'>
                ${URLs[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
}