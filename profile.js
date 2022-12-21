console.log('js connected')
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click',() => {
    alert('My favourite color is Marigold Yellow')
})
placeBtn.addEventListener('click',() => {
    alert('My favourite place is my kitchen')
})
ritualBtn.addEventListener('click',() => {
    alert('My favourite ritual is practicing flute')
})
