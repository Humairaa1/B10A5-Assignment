document.getElementById("noakhali-donate-btn")
.addEventListener('click',function(){
    
    const myTotalAmount = getInnerTextById('total-amount');
    const totalDonation = getInnerTextById('noakhali-amount');
    const myDonatiion = getInputValueById('noakhali-input');
    // const now = new Date();
    // const dateTime = now.toString();
    
    if(isNaN(myDonatiion) || 0>= myDonatiion || myTotalAmount<myDonatiion){
        alert('You can not donate')
        return;
    }

    const updateTotalDonation = totalDonation + myDonatiion ;
    document.getElementById('noakhali-amount').innerText = updateTotalDonation;

    const updateMyTotalAmount = myTotalAmount - myDonatiion;
    document.getElementById('total-amount').innerText = updateMyTotalAmount;

    // const div = document.createElement('div');
    // div.classList.add('border', 'rounded-md', 'p-4');
    // div.innerHTML=`
    // <p class="text-xl font-bold">${myDonatiion} Taka is Donated for Flood at Noakhali, Bangladesh</p>
    // <p>${dateTime}</p>
    // `
    // document.getElementById('history-section').appendChild(div)
    // for History sectio
    setHistory('noakhali-input','noyakhali-title')

    document.getElementById('noakhali-input').value=" ";
    my_modal_1.showModal();
    
})