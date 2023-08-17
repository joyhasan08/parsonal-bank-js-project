
//verible declar part
 let totalOfDeposit =0;
 let Total = totalOfDeposit.toString;

document.getElementById('deposit-btn').addEventListener('click',function(){
    const getDeposit = document.getElementById('get-deposit').value;
    let intOfDeposit = parseInt(getDeposit)
    totalOfDeposit += intOfDeposit;

    document.getElementById('Deposit-display').innerText = Total ;
    document.getElementById('get-deposit').value='';
})