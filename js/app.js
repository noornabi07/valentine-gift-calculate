// get value from input
function getInputValue(id){
    const inputValue = document.getElementById(id);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseInt(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}

// get value from element
function getElementValue(id){
    const elementValue = document.getElementById(id);
    const elementValueString = elementValue.innerText;
    const elementValueNumber = parseInt(elementValueString);
    return elementValueNumber;
}

function setInnerText(id, value){
    const setText = document.getElementById(id);
    setText.innerText = value;
}

// chocolate buy function calculate
document.getElementById('kitkat-btn').addEventListener('click', function(){
    const chocolateQuantity = getInputValue('chocolate-input');
    const chocolateCost = chocolateQuantity * 200;
    
    if(isNaN(chocolateQuantity) || chocolateQuantity < 0){
        alert('Please type positive number');
        return;
    }

    setInnerText('chocolate-amount', chocolateCost);

    const totalCost = getElementValue('total-cost');
    const total = chocolateCost + totalCost;
    setInnerText('total-cost', total);
});

// rose buy function calculate
document.getElementById('rose-btn').addEventListener('click', function(){
    const roseQuantity = getInputValue('rose-input');
    const roseCost = roseQuantity * 100;

    if(isNaN(roseQuantity) || roseQuantity < 0){
        alert('Please type positive number');
        return;
    }
    setInnerText('rost-amount', roseCost);


    const totalCost = getElementValue('total-cost');
    const total = roseCost + totalCost;
    setInnerText('total-cost', total);

});

// diary buy function calculate
document.getElementById('diary-btn').addEventListener('click', function(){
    const diaryQuantity = getInputValue('diary-input');
    const diaryCost = diaryQuantity * 100;

    if(isNaN(diaryQuantity) || diaryQuantity < 0){
        alert('Please type positive number');
        return;
    }
    
    setInnerText('diary-amount', diaryCost);

    const totalCost = getElementValue('total-cost');
    const total = diaryCost + totalCost;
    setInnerText('total-cost', total);
});

// apply button clicke get for offer

document.getElementById('apply-btn').addEventListener('click', function(){

    const cupon = getInputValue('offer-input')
    if(cupon === 101){
        const totalAmount = getElementValue('total-cost');
        const percent = totalAmount * 0.1;
        
        const payNow = totalAmount - percent;
        
        setInnerText('pay-amount', payNow);
    }else{
        alert('please submit right promo code');
        return;
    }
    
});

