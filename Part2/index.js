// const  poker = 'The house always wins!';
// console.log(poker);

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    
}

const diamonds = document.querySelector('#diamonds');
diamonds.style = 'color: red;'

const clubs = document.querySelector('#clubs');
clubs.style = 'color: black;'

const hearts = document.querySelector('#hearts');
hearts.style = 'color: red;'

const spades = document.querySelector('#spades');
spades.style = 'color: black;'

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
  }


