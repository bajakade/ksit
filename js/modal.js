const items = ['Sugar', 'Yeast', 'Floor', 'Water'];


const tableBody = document.getElementsByTagName('tbody')[0]
const modalCard = document.getElementById('modal')


function createList() {
    //TODO:  - delete the entire list and then create a new one
    for(let i=0; i <items.length; i++) {
        const tableRow = document.createElement('tr');
        const tableRowData = '<td>'+ (i + 1) + '</td>' + '<td>' + items[i] +  '</td>' + '<td> <button class="deleteBtn">Delete</button> </td>';
        tableRow.innerHTML = tableRowData;
        tableBody.appendChild(tableRow);
    }
}

createList();



// To event lister addEventListener takes two parameters
// 1. the event name e.g click
// 2. the event handle i.e. a function to call
for(let i=0; i < items.length; i++) {
    document.getElementsByClassName('deleteBtn')[i].addEventListener('click', handleDeleteItem);
}

let actionBtn = document.querySelectorAll('#warningModal button');


for(let y=0; y < actionBtn.length; y++) {
    actionBtn[y].addEventListener('click', (e) => performAction(e))
}

document.onclick = function(ev) {
    if(ev.target == modalCard) {
        hideModal();
    }
}


function handleDeleteItem() {
    modalCard.style.display = 'block';
}
function performAction(e) {
    if(e.target.id === 'cancelAction') {
        hideModal();
    }
    if (e.target.id === 'proceed') {
        // delete
        // starting from the first index remove one(1) element
        items.splice(0, 1); //TODO: this only delete first item. Figure out how to delete the deleted item
        
        createList();
        hideModal();
    }
}

function hideModal() {
    // target attribute returns the targeted element. i.e the element on which the action is performed
    modalCard.style.display = 'none';
}