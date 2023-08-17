
//verible declar part
 
//  let Total = totalOfDeposit.toString;

document.getElementById('deposit-btn').addEventListener('click',function(){
    const getDeposit = document.getElementById('get-deposit').value;
    let intOfDeposit = parseInt(getDeposit)
    let previousDeposit = document.getElementById('Deposit-display').innerText;
    let previousDepositNumber = parseInt(previousDeposit);
    // totalOfDeposit += intOfDeposit;
    let totalOfDeposit = 0;
    totalOfDeposit = intOfDeposit + previousDepositNumber;

    document.getElementById('Deposit-display').innerText = totalOfDeposit ;
    document.getElementById('get-deposit').value='';

    // total blalance part 
    let previousBalance = parseInt(document.getElementById('balance-display').innerText) 
    let totalBalance = 0;
    totalBalance = previousBalance + intOfDeposit;

    document.getElementById('balance-display').innerText = totalBalance;

})



