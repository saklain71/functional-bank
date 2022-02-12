// handler deposit button event

document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposite
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount =parseFloat(newDepositText);
    //console.log(depositAmount);
    
    //update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmoutn = parseFloat(previousDepositText);
    const newDepositTotal =previousDepositAmoutn + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear input field
    depositInput.value = '';

})  
    //withdraw amount
    document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

     // update balance
 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal =  previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
  


     // set clear withdraw
    withdrawInput.value = '';
 
})