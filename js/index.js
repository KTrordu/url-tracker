let myURLs = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const ulEl = document.getElementById("ul-el");

const URLsFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"));

if (URLsFromLocalStorage) {
    myURLs = URLsFromLocalStorage;
    render(myURLs);
}

tabBtn.addEventListener("click", function () {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myURLs.push(tabs[0].url);
        localStorage.setItem("myURLs", JSON.stringify(myURLs));
        render(myURLs);

    });

});

inputBtn.addEventListener("click", function() {

    myURLs.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myURLs", JSON.stringify(myURLs));

    render(myURLs);
});

deleteBtn.addEventListener("dblclick", function() {

    localStorage.clear();

    myURLs = [];

    render(myURLs);

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