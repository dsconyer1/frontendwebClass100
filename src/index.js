import './styles.css';
import { getRandomInt, ready } from './utils';

let secretNumber,
    squares;


function doIt() {
    // find all the squares.
    squares = document.querySelectorAll('.square');
    //on each of them, have something happen when they click
    let squareNumber = 1;
    squares.forEach(aSquare => {
        aSquare.addEventListener('click', handleClick);
        aSquare.dataset.number = squareNumber.toString();
        squareNumber++;
    });

    secretNumber = getRandomInt(1,6);
    console.log('The secret number is ', secretNumber);
}

function handleClick(event) {
 
    if(parseInt(this.dataset.number) === secretNumber){
        this.classList.add('winner');
        const currentSquare = this;
        console.log('You Win!!');
        squares.forEach(aSquare => {
            aSquare.removeEventListener('click', handleClick);
            if (aSquare!== currentSquare){
                aSquare.classList.add('loser');
            }
        });
    } else {
        this.classList.add('loser');
    }
}
ready(doIt);