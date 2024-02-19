

function totalSeatsPrices() {
    const perTicketPrice = 550;
    const totalPrice = perTicketPrice * count;
    console.log(totalPrice);

    const finalPrice = document.getElementById('total-price');
    finalPrice.innerText = totalPrice;
}

function appendSelectedSeats(buttonId) {
    const spanTag = document.createElement('span');
    spanTag.innerText = 'Economoy';
    spanTag.className = 'mx-40';

    const pTag = document.createElement('p');

    const seatName = document.createTextNode(buttonId);
    const price = document.createTextNode('550');

    pTag.appendChild(seatName);
    pTag.appendChild(spanTag);
    pTag.appendChild(price);

    // console.log(pTag);

    const appendParent = document.getElementById('name-cls-price');
    appendParent.appendChild(pTag);
}

function seatLeft() {
    const seats = document.getElementById('seat-left');
    const currentSeats = parseInt(seats.innerText);
    const seatRemain = currentSeats - 1;
    seats.innerText = seatRemain;

    // console.log(seatRemain);

    const numberOfSeat = document.getElementById('select-seat');
    const numberOfSelectSeat = parseInt(numberOfSeat.innerText);
    const updateSeats = numberOfSelectSeat + 1;

    numberOfSeat.innerText = updateSeats;
}

function setButtonBackground(buttonId) {
    const targetButton = document.getElementById(buttonId);
    targetButton.classList.add('bg-primary');
    // calling appendSelectedSeats function()
}

function getElementId(e) {

    const buttonId = e.target.innerText;
    // console.log(values);
    if (count > 3) {
        return;
    }
    count++;
    setButtonBackground(buttonId);
    seatLeft();
    appendSelectedSeats(buttonId);
    // console.log(count++);
    totalSeatsPrices();

}
let count = 0;
document.addEventListener('click', getElementId);



const applyButton = document.getElementById('apply-btn');
applyButton.addEventListener('click', function () {
    const totalPP = document.getElementById('total-price');
    const totalP = parseInt(totalPP.innerText);

    const inputText = document.getElementById('input-text').value;
    const grandTotal = document.getElementById('grand-total');
    
    const inputHidden = document.getElementById('input-hidden');
    
    if(inputText === "NEW15"){
        const discountPrice = totalP - (totalP * 0.15);
        // console.log(discountPrice);
        grandTotal.textContent = discountPrice;
        inputHidden.classList.add('hidden');
    }
    else if(inputText === "COUPLE 20"){
        const discountPrice = totalP - (totalP * 0.20);
        // console.log(discountPrice);
        grandTotal.textContent = discountPrice;
        inputHidden.classList.add('hidden');
    }

})

const applyButton2 = document.getElementById('next-btn');
applyButton2.addEventListener('click', function(){
    const confirmMsg = document.getElementById('hidden-div');
    const bigSection = document.getElementById('big-section');
    confirmMsg.classList.remove('hidden');
    bigSection.classList.add('hidden');
})
