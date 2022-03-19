const API_key = 'fe9e5c0270844de5ada128d9c6bf3bcf';

const accordionContainer = document.querySelector('#accordion-container');

// Fetching the data from API 
// gets promise as a response 
// and converting the resonse into json
fetch(`https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=${API_key}`)
    .then(response => response.json())
    .then(data => checkStatus(data));


// Checking the status of request
// and Enabling Search Functinality

function checkStatus(data) {
    if (data.status != 'ok') {
        alert(data.message);
    }
    else {
        populateDOM(data.articles);

    }
}

// Initializing empty variable

let html =''


// Populating the DOM

function populateDOM(articleArray) {
    articleArray.forEach((article,index) => {

        html += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${article.title}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#accordion-container">
                            <div class="accordion-body">
                                ${article.content} <a href="${article.url}" target="_blank"> Read More...</a>
                            </div>
                        </div>
                    </div> `
    })

    accordionContainer.innerHTML = html;
}



// Search Functionality

// Selecting search elements
let searchTxt = document.querySelector('#searchTxt');
let searchBtn = document.querySelector('.btn');


// Adding Event listeners to search elements
searchBtn.addEventListener('click', search)
searchTxt.addEventListener('input', search)


// Taking every accordian 
// and looping through them
// and checking if the input Value matches to its title

function search(){
    let inputVal = searchTxt.value.toLowerCase();
    
    let accordionItems = document.querySelectorAll('.accordion-item');
    Array.from(accordionItems).forEach( accordian => {
        let accordianTitle = accordian.querySelector('.accordion-button').innerText;
        if( accordianTitle.includes(inputVal)){
            accordian.style.display = 'block';
        }
        else{
            accordian.style.display = 'none';
        }
    })
}
