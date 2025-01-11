document.getElementById('donation-btn')
.addEventListener('click',function(){
showSectionById('donation-section')

document.getElementById('donation-btn').classList.remove('btn-outline');
document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
document.getElementById('history-btn').classList.add('btn-outline');
})

document.getElementById('history-btn')
.addEventListener('click',function(){
showSectionById('history-section')

document.getElementById('history-btn').classList.remove('btn-outline');
document.getElementById('history-btn').classList.add('bg-[#B4F461]');
document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
document.getElementById('donation-btn').classList.add('btn-outline');
})