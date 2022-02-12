
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    //deposit set empty
    inputField.value = '';
    return amountValue;
}
    //update balance
function updateTotalField(totalFieldid,newDepositAmount){
   //debugger;
   const totalElement = document.getElementById(totalFieldid);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);
   totalElement.innerText = previousTotal + newDepositAmount;
   return totalElement;
}
   // get current balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}

   // handle withdraw button
function updateBalance(balanceAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText); */
    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalance +  balanceAmount;
    }
    else{
        balanceTotal.innerText = previousBalance -  balanceAmount;  
    }
    return balanceTotal;

}

// logout btn
 document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = 'index.html';
 })
// Deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
   
   // get deposit amount
   const newDepositAmount = getInputValue('deposit-input');
   // deposit total
   if(newDepositAmount > 0){
    updateTotalField('deposit-total',newDepositAmount);
    //update balance
    updateBalance(newDepositAmount, true);
   }
   else{
       alert('Inavalid amount');
   }

});

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const currenBalance = getCurrentBalance();

    // get withdraw ampunt
    const withdrawInputAmount = getInputValue('withdraw-input');
    if(withdrawInputAmount > 0 && withdrawInputAmount <= currenBalance){
    // get withdraw total
    updateTotalField('withdraw-total',withdrawInputAmount);
    //updat Balance
    updateBalance(withdrawInputAmount , false);
   }
   else{
       alert('Give valid number');
   }
 
});