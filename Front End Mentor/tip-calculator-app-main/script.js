// Selecting Elements

const amountEl = document.querySelector('.amount');
const peopleEl = document.querySelector('.people');
const resetBtn = document.querySelector('.reset-btn')

const tipAmountEl = document.querySelector('#tip-amount');
const totalEl = document.querySelector('#total');

const tipContainerEL = document.querySelectorAll('.tip');



// Declaring Variables

let tipExp;
let totalExp;


// Reset Button Functionality

resetBtn.onclick = () =>{
	amountEl.value = 0.00;
	peopleEl.value = 0;
	tipAmountEl.textContent = '0.00';
	totalEl.textContent = '0.00';
	tipContainerEL.forEach( tip => tip.classList.remove('selected'));
}


// Selecting Tip 

tipContainerEL.forEach( tip => tip.onclick = () => {

	tipContainerEL.forEach( item => item.classList.remove('selected'));
	tip.classList.add('selected');
	if( tip.innerText != 'Custom'){
		calculate(parseInt(tip.innerText, 10));
		peopleEl.oninput = () => calculate(parseInt(tip.innerText, 10));
		amountEl.oninput = () => calculate(parseInt(tip.innerText, 10));
	}
	else if(tip.innerText === 'Custom'){
		let custom = prompt('Enter Tip %');

		if( custom !== null && custom !== ''){
			calculate(parseInt(custom,10));
			peopleEl.oninput = () => calculate(parseInt(custom, 10));
			amountEl.oninput = () => calculate(parseInt(custom, 10));
		}
	}
})




// Calculting and displaying the calculations

	
function calculate(tipPercent){

	if( amountEl.value  != 0 && peopleEl.value != 0){
		tipExp = (amountEl.value* (tipPercent / 100)) / peopleEl.value;
		totalExp = parseInt((amountEl.value / peopleEl.value), 10) + parseInt(tipExp, 10);

		tipAmountEl.textContent = tipExp.toFixed(2);
		totalEl.textContent = totalExp.toFixed(2);

	}

}



