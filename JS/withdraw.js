document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdraw = getInputValueById('withdraw-field');
    const prevWithdraw = getTextElementById('withdraw-total');
    const total = newWithdraw + prevWithdraw;
    setElementbyId('withdraw-total', total);

    //Update Total
    const prevBalance = getTextElementById('balance-total');
    const totalBalance = prevBalance - newWithdraw;
    setElementbyId('balance-total', totalBalance);
});