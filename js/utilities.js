function getInnerTextById(id) {
    const totalDonation = document.getElementById(id).innerText;
    const totalDonationNum = parseFloat(totalDonation);
    return totalDonationNum;
}
function getInputValueById(id) {
    const donationAmount = document.getElementById(id).value;
    const donationAmountNum = parseFloat(donationAmount);
    return donationAmountNum;
}
function showSectionById(id) {
    // hiden 
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // showing 
    document.getElementById(id).classList.remove('hidden')
}

function setHistory(donationId, titleId) {
    const donation = document.getElementById(donationId).value;
    const title = document.getElementById(titleId).innerText;
    const now = new Date();
    const dateTime = now.toString();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-md', 'p-4');
    div.innerHTML=`
    <p class="text-xl font-bold">${donation} Taka is Donated for ${title}</p>
    <p>${dateTime}</p>
    `
   const output = document.getElementById('history-section').appendChild(div);
   return output;

}