

const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.querySelector('.main-nav');
const submitBtn = document.querySelector('.submit-btn');

let nickInput = document.getElementById('nick');
let emailInput = document.getElementById('email');
let messageContentInput = document.getElementById('message-content');


hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('visible');
});


function sendHTTPRequest(method, url, data) {
    const xml = new XMLHttpRequest;
    xml.open(method, url);

    xml.responseType = 'json';

    xml.onload = function() {
        const data = xml.response;
        console.log(data);
    }
    console.log(data)
    xml.send(JSON.stringify(data));
}


const sendRequest = () => {
    sendHTTPRequest('POST', 'http://localhost:8080', {
        'nick': nickInput.value,
        'email': emailInput.value,
        'message': messageContentInput.value
    })
}

submitBtn.addEventListener('click', sendRequest);







