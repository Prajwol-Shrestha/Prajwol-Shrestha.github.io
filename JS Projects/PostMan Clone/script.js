// Utility functions:
// 1. Utility function to get DOM element from a string

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}



// Initialize number of parameters

let addedParamCount = 0;

// Hide the parameters box initially
const parametersBox = document.querySelector('#parametersBox');
parametersBox.style.display = 'none';


// If the user clicks on params box, hide the Json box

const paramsRadio = document.querySelector('#params');
paramsRadio.addEventListener('click', () => {
    document.querySelector('#requestJsonBox').style.display = 'none';
    document.querySelector('#parametersBox').style.display = 'block';
})


// If the user clicks on JSON box, hide the Parameters box

const jsonRadio = document.querySelector('#json');
jsonRadio.addEventListener('click', () => {
    document.querySelector('#parametersBox').style.display = 'none';
    document.querySelector('#requestJsonBox').style.display = 'block';
})


// If the user click on + button add more parameters

const addParam = document.querySelector('#addParam');

addParam.addEventListener('click', () => {
    let params = document.querySelector('#paramsContainer');
    let string = `
                <div class="row my-3">
                    <label for="parameter1" class="col-sm-2 col-form-label"> Parameter ${addedParamCount + 2} </label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                    </div>
                    <div class="col">
                        <button class="btn btn-primary removeParam"> - </button>
                    </div>
                </div>`;

    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // Add an even listener to remove the parameter on clicking - 
    let removeParam = document.querySelectorAll('.removeParam');

    for (param of removeParam) {
        param.addEventListener('click', (e) => {
            let target = e.target.parentElement;
            target.parentElement.remove()
        })
    }
    addedParamCount++;
})


// if the user clicks the submit btn

let submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    //show please wait in response Box

    document.querySelector('#responsePrism').innerHTML = 'Fetching Data...';

    // fetch all the values
    let url = document.querySelector('#url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;


    // If user has used params option
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamCount + 1; i++) {
            if (document.querySelector('#parameterKey' + (i + 1)) != undefined) {

                let key = document.querySelector('#parameterKey' + (i + 1)).value;
                let value = document.querySelector('#parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.querySelector('#requestJsonText').value;
    }

    // if the request type is post, invoke fetch API to create a post request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then(text => {
                document.querySelector('#responsePrism').innerHTML = text;
                Prism.highlightAll();
            })
    }
    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.text())
            .then(text => {
                document.querySelector('#responsePrism').innerHTML = text;
                Prism.highlightAll();
            })
    }


})