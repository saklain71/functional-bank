
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    //deposit set empty
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldid,newDepositAmount){
   //debugger;
   const totalElement = document.getElementById(totalFieldid);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);
//    const newDepositTotal = previousDepositAmoutn + newDepositAmount;
   totalElement.innerText = previousTotal + newDepositAmount;
   return totalElement;

}
function updateBalance(balanceAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalance +  balanceAmount;
    }
    else{
        balanceTotal.innerText = previousBalance -  balanceAmount;
        
    }
    return balanceTotal;

}

// Deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
   
   // get deposit amount
   const newDepositAmount = getInputValue('deposit-input');
   // deposit total
   const  depositTotal =  updateTotalField('deposit-total',newDepositAmount);
   //update balance
   updateBalance(newDepositAmount, true);
});

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // get withdraw ampunt
    const withdrawInputAmount = getInputValue('withdraw-input')

    // get withdraw total
    const withdrawAmount = updateTotalField('withdraw-total',withdrawInputAmount);

    //updat Balance
   updateBalance(withdrawInputAmount , false);

});