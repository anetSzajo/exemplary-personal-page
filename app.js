

const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.querySelector('.main-nav');
const submitBtn = document.querySelector('.submit-btn');
const getBtn = document.querySelector('.get-btn');

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

    xml.send(JSON.stringify(data));
}


const sendPosts = () => {

    const xml = new XMLHttpRequest();
    xml.open('POST', 'http://localhost:8080');

    xml.responseType = 'json';
    let formValue = {
        
    'nick': nickInput.value,
    'email': emailInput.value,
    'message': messageContentInput.value
    }

    xml.send(JSON.stringify(formValue));

}

const getPosts = () => {
    console.log('once')
    const xml = new XMLHttpRequest();
    xml.open('GET', 'http://localhost:8080')
  
    xml.send()

    xml.addEventListener('loadend', () => {
        const response = (JSON.parse(xml.responseText))
        console.log(response)
    })

    // xml.onloadend = (event) => {
    //     const response = (JSON.parse(xml.responseText))
    //     console.log(response)
    // }

}


submitBtn.addEventListener('click', sendPosts);
getBtn.addEventListener('click', getPosts);