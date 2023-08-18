// utilits fuction
function getInputValueById(filedId){
    let inputFiledValueInt = document.getElementById(filedId).value;
    let inputFiledValueIntNEW = parseInt(inputFiledValueInt);
    inputFiledValueInt = ''
    return inputFiledValueIntNEW 
}


// click hendler
document.getElementById('fix-btn').addEventListener('click', function(){
    const fixedDeposit = getInputValueById('interst-input');
    // console.log(fixedDeposit);
    let interst = 0;
    interst = (20 * fixedDeposit )/100;

    document.getElementById('fixed-display').innerText = interst  ;
})
