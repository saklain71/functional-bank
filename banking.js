// Deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
   // get deposit amount
    const depositfield = document.getElementById('deposit-input');
    const depositAmount = depositfield.value ;
    const newDepositAmount = parseFloat(depositAmount);
    // get total deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmoutnText = depositTotal.innerText;
    const previousDepositAmoutn = parseFloat(previousDepositAmoutnText);
    const newDepositAmountTotal = previousDepositAmoutn + newDepositAmount ;
     depositTotal.innerText = newDepositAmountTotal;
     //update balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalance = parseFloat(previousBalanceText);
     const balanceTotalAmount = previousBalance + newDepositAmount;
     balanceTotal.innerText = balanceTotalAmount;

     //deposit set empty
     depositfield.value = '';

})

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // get withdraw ampunt
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    // get withdraw total
    const withdrawAmount = document.getElementById('withdraw-total');
    const previouWithdrawText = withdrawAmount.innerText;
    const previousWithdraw = parseFloat(previouWithdrawText);
    const newWithdrawAmount = previousWithdraw + withdrawInputAmount;
    withdrawAmount.innerText = newWithdrawAmount;
    //updat Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - withdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal; 

    //set withdraw empty
    withdrawInputField.value  = '';
})