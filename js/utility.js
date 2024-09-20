function getInputValueById(id){
    // console.log('utilty file Added');
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSection (id){
    document.getElementById('add-mony-conatainer').classList.add('hidden');
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('featurse-container').classList.add('hidden');
    // show Section
    const showSection = document.getElementById(id).classList.remove('hidden');
    return showSection;

}
