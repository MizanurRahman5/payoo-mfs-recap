document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMony = getInputValueById('amount');
   const pinNumber = getInputValueById('pin-number');
//    console.log(addMony, pinNumber)
if(isNaN(addMony)){
    alert('Wrong Type')
    return;
}
if(pinNumber === 1234){
    // console.log('your mony Added')
    const currentBlance = getTextValueById('current-blance');
    const newBlance = addMony + currentBlance;
    document.getElementById('current-blance').innerText = newBlance;

    const p = document.createElement('p')
    p.innerText = `Added Blance : ${addMony} Tk,  New Blance : ${newBlance} Tk`
    // console.log(p);
    document.getElementById('transection-history').appendChild(p)
}else{
    alert('Wrong Pin');
}

})