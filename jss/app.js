
    let buttonClick = 0;

 function handleOnClick (item, btn){ 
    const button = document.getElementById(btn);
    button.disabled = true;
    button.style.backgroundColor = '#A2A9AF';

    buttonClick ++;
    if(buttonClick > 5){
        button.disabled = false;
        button.style.backgroundColor = '#015196';
        alert('please select only five players');
        buttonClick = 5;
        return;
    }

    const playerName = document.getElementById(item);
    const playersSelectionField = document.getElementById('players-list');
    const createList =document.createElement('p');
    let number = buttonClick;
    createList.innerText = number + ". " + playerName.innerText;
    playersSelectionField.appendChild(createList);

}

// Calculate player section

document.getElementById('calc-btn').addEventListener('click',function(){
    //playerField called.
    const perPlayerSection = filterElement('per-player-amount');
    // Multiply with Players.
    const calculateTotal = perPlayerSection * buttonClick;
    const playerAmountField = document.getElementById('player-expense');
    playerAmountField.innerText = calculateTotal;
})

// Expenditure section for total amount

document.getElementById('totalCalc-btn').addEventListener('click',function(){
    //player Expense called.
    const playerExpense = filterElementInnerText('player-expense');
    //Manager Expense called.
    const managerExpense = filterElement('manager-expense');
    //Coach Expense called.
    const coachExpense = filterElement('coach-expense')
    //Added all expenses.
    const totalElement = document.getElementById('total');
    const totalFigure = playerExpense + managerExpense + coachExpense;
    totalElement.innerText = totalFigure;
})
