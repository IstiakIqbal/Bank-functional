document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDeposit = getInputValueById('deposit-field');
    const prevDeposit = getTextElementById('deposit-total');
    const total = prevDeposit + newDeposit;
    setElementbyId('deposit-total', total);

    //Update Total
    const prevBalance = getTextElementById('balance-total');
    const totalBalance = newDeposit + prevBalance;
    setElementbyId('balance-total', totalBalance);
})