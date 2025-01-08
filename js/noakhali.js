document.getElementById("noakhali-donate-btn")
.addEventListener('click',function(){
    
    const myTotalAmount = getInnerTextById('total-amount');
    const totalDonation = getInnerTextById('noakhali-amount');
    const myDonatiion = getInputValueById('noakhali-input');
    
    if(isNaN(myDonatiion) || 0>= myDonatiion || myTotalAmount<myDonatiion){
        alert('You can not donate')
        return;
    }

    const updateTotalDonation = totalDonation + myDonatiion ;
    document.getElementById('noakhali-amount').innerText = updateTotalDonation;

    const updateMyTotalAmount = myTotalAmount - myDonatiion;
    document.getElementById('total-amount').innerText = updateMyTotalAmount;

    document.getElementById('noakhali-input').value=" ";
    my_modal_1.showModal();
    
})