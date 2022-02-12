/* function doubleIt(){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */


function getInputValue(){
    const depositfield = document.getElementById('deposit-input');
    const depositAmountText = depositfield.value ;
    const newDepositAmount = parseFloat(depositAmountText);
    //deposit set empty
    depositfield.value = '';
    return newDepositAmount;
}

// Deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
   
   // get deposit amount
   const newDepositAmount = getInputValue();
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