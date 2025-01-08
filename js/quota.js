document.getElementById("quota-donate-btn")
.addEventListener('click',function(){
    
    const myTotalAmount = getInnerTextById('total-amount');
    const totalDonation = getInnerTextById('quota-amount');
    const myDonatiion = getInputValueById('quota-input');
    
    if(isNaN(myDonatiion) || 0>= myDonatiion || myTotalAmount<myDonatiion){
        alert('You can not donate')
        return;
    }

    const updateTotalDonation = totalDonation + myDonatiion ;
    document.getElementById('quota-amount').innerText = updateTotalDonation;

    const updateMyTotalAmount = myTotalAmount - myDonatiion;
    document.getElementById('total-amount').innerText = updateMyTotalAmount;

    document.getElementById('quota-input').value=" ";
    my_modal_3.showModal();
    
})