// Select Elements
const activityEl = document.querySelector('.activity');
const dailyEl = document.querySelector('.daily');
const weeklyEl = document.querySelector('.weekly');
const monthlyEl = document.querySelector('.monthly');




// Render Activity Cards



const renderCards = (timeFrame, time) =>{
	data.forEach( item => {
		activityEl.innerHTML += 
		`
			<div class="activity-card-bg">
		        <div class="activity-card-content">
		          <h2> ${item.title} </h2>
		          <span class="dots"> ... </span>
		          <h3> ${item.timeframes[timeFrame].current} hrs</h3>
		          <span class="time"> ${time} -  ${item.timeframes[timeFrame].previous} hrs</span>
		          
		        </div>
		    </div>
		`
	});
}



const dynamicBg = () =>{
	const activityCardBgEl = document.querySelectorAll('.activity-card-bg');


	activityCardBgEl.forEach( title => {
		if(title.innerText.includes('Work')){
			title.classList.add('work');
		}
		else if( title.innerText.includes('Play')){
			title.classList.add('play');
		}
		else if( title.innerText.includes('Study')){
			title.classList.add('study');
		}
		else if( title.innerText.includes('Exercise')){
			title.classList.add('exercise');
		}
		else if( title.innerText.includes('Social')){
			title.classList.add('social');
		}
		else if( title.innerText.includes('Self Care')){
			title.classList.add('selfcare');
		}
	})
}



const changeTimeFrame = (timeFrame, time) =>{
	activityEl.innerHTML = '';

	if (timeFrame === 'daily'){
		dailyEl.classList.add('active');
		weeklyEl.classList.remove('active');
		monthlyEl.classList.remove('active');
	}
	else if( timeFrame === 'weekly'){
		weeklyEl.classList.add('active');
		dailyEl.classList.remove('active');
		monthlyEl.classList.remove('active');
	}
	else if(timeFrame === 'monthly'){
		monthlyEl.classList.add('active');
		weeklyEl.classList.remove('active');
		dailyEl.classList.remove('active');
	}

	renderCards(timeFrame, time);
	dynamicBg();
}



function onload(){
	renderCards('weekly', 'Last Week');
	dynamicBg();
}


onload();