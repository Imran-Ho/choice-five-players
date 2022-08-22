

 function handleOnClick (){
    const playersSelectionList = document.getElementById('players-list');
    const playersSelection = document.getElementById('shakib');
    const createList =document.createElement('li');
    createList.innerText = playersSelection.innerText;
    playersSelectionList.appendChild(createList);

}

document.getElementById('babar-btn').addEventListener('click', function(){
    const playersSelectionList = document.getElementById('players-list');
    const playersSelection = document.getElementById('babar');
    const createList =document.createElement('li');
    createList.innerText = playersSelection.innerText;
    playersSelectionList.appendChild(createList);

})

document.getElementById('totalCalc-btn').addEventListener('click',function(){
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const previousPlayerExpense = parseInt(playerExpenseString);

    const managerExpense = document.getElementById('manager-expense');
    const managerExpenseString = managerExpense.value;
    const managerSalary = parseInt (managerExpenseString);

    const coachExpense = document.getElementById('coach-expense');
    const coachExpenseString = coachExpense.value;
    const coachSalary = parseInt(coachExpenseString);
})




// document.getElementById('calc-btn').addEventListener('click', function(){
//     const selectedPlayers = document.querySelectorAll('.players-list');
//      = selectedPlayers
//     console.log('li list')

// })