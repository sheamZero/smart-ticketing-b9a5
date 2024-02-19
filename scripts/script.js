


function seatLeft(){
    const seats = document.getElementById('seat-left');
    const currentSeats = parseInt(seats.innerText);
    const seatRemain = currentSeats - 1;

    seats.innerText = seatRemain;

    // console.log(seatRemain);
}

function setButtonBackground(buttonId){
    const targetButton = document.getElementById(buttonId);
    
    targetButton.classList.add('bg-primary');

    seatLeft();
}

function getId(e){
    const buttonId = e.target.innerText;
    // console.log(values);

    setButtonBackground(buttonId);
}

document.addEventListener('click', getId);