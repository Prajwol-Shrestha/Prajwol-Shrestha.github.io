const smallScreenEL = document.querySelector('.small-screen');
const largeScreenEl = document.querySelector('.large-screen');
const shareIcon = document.querySelector('.push');


const smallDevices = window.matchMedia("(max-width: 500px)");



function myFunction(x){
	if( x.matches){
		largeScreenEl.onclick = () => {
			largeScreenEl.style.display = "none";
			smallScreenEL.style.display = "flex";
		}
		smallScreenEL.onclick = () => {
			smallScreenEL.style.display = "none";
			largeScreenEl.style.display = "flex";
		}

	}
	else{
		largeScreenEl.style.display = "flex";
		smallScreenEL.style.display = "none";

	}


}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state

