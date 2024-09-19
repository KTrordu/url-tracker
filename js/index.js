const inputBtn = document.getElementById("input-btn");

let myLeads = [];
const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    let leadToBePushed = inputEl.value;
    myLeads.push(leadToBePushed);
    
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    }
});