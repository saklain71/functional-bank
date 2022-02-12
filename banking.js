/* function doubleIt(){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */


function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    //deposit set empty
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldid,newDepositAmount){
   debugger;
   const totalElement = document.getElementById(totalFieldid);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);
//    const newDepositTotal = previousDepositAmoutn + newDepositAmount;
   totalElement.innerText = previousTotal + newDepositAmount;
   return totalElement;

}

// Deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
   
   // get deposit amount
   const newDepositAmount = getInputValue('deposit-input');
   // deposit total
   const  depositTotal =  updateTotalField('deposit-total',newDepositAmount);

     //update balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalance = parseFloat(previousBalanceText);
     const balanceTotalAmount = previousBalance + newDepositAmount;
     balanceTotal.innerText = balanceTotalAmount;

});

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // get withdraw ampunt
    const withdrawInputAmount = getInputValue('withdraw-input')

    // get withdraw total
    const withdrawAmount = updateTotalField('withdraw-total',withdrawInputAmount);

    //updat Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - withdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal; 


});