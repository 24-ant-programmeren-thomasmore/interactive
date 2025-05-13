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
let visitors = ["Jan", "Badr", "Jos", "Mieke", "Anna", "Fien", "Klara", "Souf"];
let showVisitors = false;
console.log(visitors);

//functie gebruikt alleen haar parameters, geen side-effects
function isInvited(visitors, name) {
    return visitors.find(v => v.toLowerCase() === name.toLowerCase());
}

//oefening stap 1 en 2
//aparte functie omdat we dan met return kunnen werken
//functie gebruikt alleen haar parameters, geen side-effects
function checkVisitorPresentMessage(visitors, name) {
    if (!name) return "vul een naam in.";

    const invitedName = isInvited(visitors, name);
    return invitedName ? `${invitedName} is welkom!` : `${name} is niet uitgenodigd.`;
}

//UI function
function showVisitorsInUI() {
    if (showVisitors) {
        // visitorListElement.innerText=visitors; // version 1: no layout
        const filterString = nameInputElement.value.toLowerCase();
        const filteredAndSortedVisitors = visitors
            .filter(entry => entry.toLowerCase().includes(filterString))
            .toSorted();
        const innerHTML = filteredAndSortedVisitors
            .map(entry => `<li>${entry}</li>`)
            .join(""); // join is nodig want anders zie je , tussen de <li> omdat je dan een array afdrukt ipv een string
        visitorListElement.innerHTML = innerHTML;
    } else
        visitorListElement.innerHTML = "";
}


//functionele functie - maakt nieuwe array
//functie gebruikt alleen haar parameters, geen side-effects
function listWithExtraInvitee(visitors, name) {
    return visitors.concat(name);
}

//functionele functie - returnt wel UI-message
function addInvitee(name) {
    //preconditions:
    if (!name) return "vul een naam in.";
    if (isInvited(visitors, name)) return `${name} was al uitgenodigd.`;

    visitors = listWithExtraInvitee(visitors, name);
    return `${name} toegevoegd.`;
}

//oefening stap 1 en 2
checkVisitorPresentButtonElement.addEventListener("click", () => {
    console.log("checkVisitorPresentButton onClick");
    messageElement.innerText = checkVisitorPresentMessage(visitors, nameInputElement.value);
})

//oefening stap 3
showVisitorsButtonElement.addEventListener("click", () => {
    console.log("showVisitorsButtonElement onClick");
    showVisitors = !showVisitors;
    showVisitorsInUI();
})

//check first: name should not be empty and should not be in the list already
//create a new array and assign it to the visitors variable
addVisitorButtonElement.addEventListener("click", () => {
    console.log("addVisitorButtonElement onClick");
    messageElement.innerHTML = addInvitee(nameInputElement.value);
    nameInputElement.value = "";
    showVisitorsInUI();
})

nameInputElement.addEventListener("input", () => {
    console.log("nameInputElement onClick");
    showVisitorsInUI();
    filterElement.innerText = `filtered on ${(nameInputElement.value.toLowerCase())}`;
})

