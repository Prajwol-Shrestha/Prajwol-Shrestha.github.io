// Select Elements
const activitiesCardsEl = document.querySelector('.activitiesCards');
const dailyEl = document.querySelector('.daily');
const weeklyEl = document.querySelector('.weekly');
const monthlyEl = document.querySelector('.monthly');




// Render Cards


function renderCards(time, selected){
	data.forEach( activity => {
		activitiesCardsEl.innerHTML += 
		`
		   <div class="activityContainer">
          	<div class="activityContent">
	            <div class="title">
	              <h3> ${activity.title} </h3>
	              <span> ... </span>
	            </div>

	            <div class="time">
	              <h1> ${activity.timeframes[time].current} hrs </h1>
	              <span> ${selected} - ${activity.timeframes[time].previous} hrs</span>
	            </div>
          </div>
        </div>
		`
	})
}




// Add BackGround Images to each cards

function addBgImg(){
	const activityContainerEl = document.querySelectorAll('.activityContainer')
	
	activityContainerEl.forEach( item => {
		if(item.innerText.includes('Work')){
			item.classList.add('work');
		}
		if(item.innerText.includes('Play')){
			item.classList.add('play');
		}
		if(item.innerText.includes('Study')){
			item.classList.add('study');
		}
		if(item.innerText.includes('Exercise')){
			item.classList.add('exercise');
		}
		if(item.innerText.includes('Social')){
			item.classList.add('social');
		}
		if(item.innerText.includes('Self Care')){
			item.classList.add('selfCare');
		}
	})
};




// Toggle TimeFrames 

function active(time, selected){
	activitiesCardsEl.innerHTML = '';
	renderCards(time, selected);
	addBgImg();

	if( time === 'daily'){
		dailyEl.classList.add('active');
		weeklyEl.classList.remove('active');
		monthlyEl.classList.remove('active');
	}
	else if( time === 'weekly'){
		dailyEl.classList.remove('active');
		weeklyEl.classList.add('active');
		monthlyEl.classList.remove('active');
	}
	else if( time === 'monthly'){
		dailyEl.classList.remove('active');
		weeklyEl.classList.remove('active');
		monthlyEl.classList.add('active');
	}
}


// Onload Dsiplay

function onload(){
	weeklyEl.classList.add('active');
	renderCards('weekly', 'Week');
	addBgImg();

}


onload();



