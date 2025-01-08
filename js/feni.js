document.getElementById("feni-donate-btn")
.addEventListener('click',function(){
    
    const myTotalAmount = getInnerTextById('total-amount');
    const totalDonation = getInnerTextById('feni-amount');
    const myDonatiion = getInputValueById('feni-input');
    
    if(isNaN(myDonatiion) || 0>= myDonatiion || myTotalAmount<myDonatiion){
        alert('You can not donate')
        return;
    }

    const updateTotalDonation = totalDonation + myDonatiion ;
    document.getElementById('feni-amount').innerText = updateTotalDonation;

    const updateMyTotalAmount = myTotalAmount - myDonatiion;
    document.getElementById('total-amount').innerText = updateMyTotalAmount;

    document.getElementById('feni-input').value=" ";
    my_modal_2.showModal();
    
})