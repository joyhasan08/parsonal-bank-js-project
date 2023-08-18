
//verible declar part
let totalBalance = 0;
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
   
    totalBalance = previousBalance + intOfDeposit;

    document.getElementById('balance-display').innerText = totalBalance;

})

    //withDraw option
    document.getElementById('withDraw-btn').addEventListener('click',function(){
            const getWithDrawValue = parseFloat(document.getElementById('get-withDraw').value);
            
            document.getElementById('get-withDraw').value = '';
            console.log(getWithDrawValue);
            document.getElementById('Withdraw-display').innerText = parseFloat(getWithDrawValue);
            let previousBalance = parseInt(document.getElementById('balance-display').innerText) 
            totalBalance = previousBalance - getWithDrawValue;
            document.getElementById('balance-display').innerText = totalBalance;
            
    })


