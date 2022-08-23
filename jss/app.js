

 function handleOnClick (item, item2){
    const playersSelectionList = document.getElementById('players-list');
    const playersSelection = document.getElementById(item);
    const createList =document.createElement('li');
    createList.innerText = playersSelection.innerText;
    playersSelectionList.appendChild(createList);
    const liChildren = playersSelectionList.getElementsByTagName('*').length;
    const buttonItems = document.getElementById(item2);
    buttonItems.disabled = true

    if (liChildren == '6' ){

        alert('please select only five players');
    }   
}

// const button = document.querySelectorAll('#btn-add');
// const disableButton = () => {
//     button.disabled = true;
// }
// button.addEventListener('click', disableButton);



// document.getElementById('babar-btn').addEventListener('click', function(){
//     const playersSelectionList = document.getElementById('players-list');
//     const playersSelection = document.getElementById('babar');
//     const createList =document.createElement('li');
//     createList.innerText = playersSelection.innerText;
//     createList.classList.add('item');
//     playersSelectionList.appendChild(createList);

// })
// this is a unique function for calling 

function filterElement (uniqueId){
    const uniqueElement = document.getElementById(uniqueId);
    const uniqueElementString = uniqueElement.value;
    const uniqueElementFigure = parseInt(uniqueElementString);
    return uniqueElementFigure;
}
function filterElementInnerText (uniqueIdText){
    const uniqueElementText = document.getElementById(uniqueIdText);
    const uniqueElementTextString = uniqueElementText.innerText;
    const uniqueElementTextFigure = parseInt(uniqueElementTextString);
    return uniqueElementTextFigure;
}

document.getElementById('calc-btn').addEventListener('click',function(){
    const playerListedId = document.getElementById('players-list');
    const allChildren = playerListedId.getElementsByTagName('*').length;
    const playerListedString = parseInt(allChildren);

    const perPlayerSection = filterElement('per-player-amount');

    const playersTotalId = document.getElementById('player-expense');
    const playersTotal = playerListedString * perPlayerSection;
    playersTotalId.innerText = playersTotal;
    
})


// total amount
document.getElementById('totalCalc-btn').addEventListener('click',function(){

    const playerExpense = filterElementInnerText('player-expense');

    const managerExpense = filterElement('manager-expense');
    
    const coachExpense = filterElement('coach-expense')

    const totalElement = document.getElementById('total');
    const totalFigure = playerExpense + managerExpense + coachExpense;
    totalElement.innerText = totalFigure;
})
