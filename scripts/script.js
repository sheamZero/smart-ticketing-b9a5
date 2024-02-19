

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
    if (count > 4) {
        return;
    }

    setButtonBackground(buttonId);
    seatLeft();
    appendSelectedSeats(buttonId);
    console.log(count++);

}
let count = 1;
document.addEventListener('click', getElementId);