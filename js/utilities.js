function getInnerTextById(id){
    const totalDonation = document.getElementById(id).innerText;
    const totalDonationNum = parseFloat(totalDonation);
    return totalDonationNum;
}
function getInputValueById(id){
    const donationAmount = document.getElementById(id).value;
    const donationAmountNum = parseFloat(donationAmount);
    return donationAmountNum;
}
