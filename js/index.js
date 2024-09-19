const inputBtn = document.getElementById("input-btn");

let myURLs = [];
const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");



inputBtn.addEventListener("click", function() {
    
    myURLs.push(inputEl.value);

    inputEl.value = "";

    renderURLs();
});

function renderURLs() {
    
    let listItems = "";
    
    for (let i = 0; i < myURLs.length; i++) {
        listItems += `
        <li> 
            <a target = '_blank' href='${myURLs[i]}'>
                ${myURLs[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
}