import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, 
    ref,
    push,
    onValue,
    remove
 } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://url-tracker-app-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");

const ulEl = document.getElementById("ul-el");

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists();
    
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);

        render(leads);
    }
});

inputBtn.addEventListener("click", function() {

    push(referenceInDB, inputEl.value);
    inputEl.value = "";

});

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB);
    ulEl.innerHTML = "";
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