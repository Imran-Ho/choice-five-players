

 function handleOnClick (item){
    const playersSelectionList = document.getElementById('players-list');
    const playersSelection = document.getElementById(item);
    const createList =document.createElement('li');
    createList.innerText = playersSelection.innerText;
    playersSelectionList.appendChild(createList);
    const liChildren = playersSelectionList.getElementsByTagName('*').length;
    if (liChildren == '6' ){
        alert('put a big amount');
        return liChildren;
    }
    
}



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

    // const perPlayerId = document.getElementById('per-player-amount');
    // const perPlayerAmountString = perPlayerId.value;
    // const perPlayerAmount = parseInt(perPlayerAmountString);

    const playersTotalId = document.getElementById('player-expense');
    const playersTotal = playerListedString * perPlayerSection;
    playersTotalId.innerText = playersTotal;
    
})


// total amount
document.getElementById('totalCalc-btn').addEventListener('click',function(){

    const playerExpense = filterElementInnerText('player-expense');

    // const playerExpense = document.getElementById('player-expense');
    // const playerExpenseString = playerExpense.innerText;
    // const previousPlayerExpense = parseInt(playerExpenseString);
    const managerExpense = filterElement('manager-expense');
    // const managerExpense = document.getElementById('manager-expense');
    // const managerExpenseString = managerExpense.value;
    // const managerSalary = parseInt (managerExpenseString);

    const coachExpense = filterElement('coach-expense')
    // const coachExpense = document.getElementById('coach-expense');
    // const coachExpenseString = coachExpense.value;
    // const coachSalary = parseInt(coachExpenseString);

    const totalElement = document.getElementById('total');
    const totalFigure = playerExpense + managerExpense + coachExpense;
    totalElement.innerText = totalFigure;
})




// document.getElementById('calc-btn').addEventListener('click', function(){
//     const selectedPlayers = document.querySelectorAll('.players-list');
//      = selectedPlayers
//     console.log('li list')

// })