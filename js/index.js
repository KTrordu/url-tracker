let myURLs = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

let URLsFromLocalStorage = localStorage.getItem("myURLs");
myURLs = JSON.parse(URLsFromLocalStorage);

inputBtn.addEventListener("click", function() {
    
    myURLs.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myURLs", JSON.stringify(myURLs));

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