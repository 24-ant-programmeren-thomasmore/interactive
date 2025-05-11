const checkVisitorPresentButtonElement = document.getElementById("checkVisitorPresentButton");
const showVisitorsButtonElement = document.getElementById("showVisitorsButton");
const addVisitorButtonElement = document.getElementById("addVisitorButton");

const messageElement = document.getElementById("message");
const visitorListElement = document.getElementById("visitorList");
const nameInputElement = document.getElementById("nameInput");
const filterInputElement = document.getElementById("filterInput");
const filterElement = document.getElementById("filter");

//STATE of the application: what changes on user actions
//dit verandert - dus let!
const visitors = ["Jan", "Badr", "Jos", "Mieke", "Anna", "Fien", "Klara", "Souf"];
console.log(visitors);




checkVisitorPresentButtonElement.addEventListener("click", () => {
    console.log("checkVisitorPresentButton onClick");
})

showVisitorsButtonElement.addEventListener("click", () => {
    console.log("showVisitorsButtonElement onClick");
})

addVisitorButtonElement.addEventListener("click", () => {
    console.log("addVisitorButtonElement onClick");
})
