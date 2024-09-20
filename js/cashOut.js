document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked')
    const amount = getInputValueById('cash-out-amount');
    const pinNumber = getInputValueById('pin-number-cash-out');
    if(isNaN(amount)){
        alert('Wrong Type')
        return;
    }
    if(pinNumber === 1234){

        const blance = getTextValueById('current-blance');
        if(amount > blance){
            alert('Insufience Blance');
            return;
        }
        const newBlance = blance - amount;
        document.getElementById('current-blance').innerText = newBlance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h1 class="text-2xl">Cash Out</h1>
        <p>${amount} Tk , New Blance : ${newBlance}</p>
        `
        document.getElementById('transection-history').appendChild(div);


    }else{
        alert('Wrong Pin Number');
    }
})