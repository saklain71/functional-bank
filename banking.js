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
     //uodate balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalance = parseFloat(previousBalanceText);
     const balanceTotalAmount = previousBalance + newDepositAmount;
     balanceTotal.innerText = balanceTotalAmount;

     //deposit set
     depositfield.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    
})