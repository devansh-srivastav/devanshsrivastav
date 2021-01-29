import React from "react";
import ReactDOM from "react-dom";

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const scriptURL = 'https://script.google.com/macros/s/AKfycbx6G0bJF5-5BbdzryEkxLwZPmjzgcErUyDfcgQnw7jsKLNb_M1IC4HF/exec'
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => 
            document.getElementById('nameInput').value = '',
            document.getElementById('emailInput').value = '',
            document.getElementById('messageInput').value = '',
            document.getElementById('submissionCont').innerHTML = '<div id = "submission" class="animate__animated animate__bounce"><p class="submit-message">Message has been sent successfully! I will get back to you shortly.</p></div>',
            setTimeout(function () {
                document.getElementById('submission').innerHTML =''
            }, 5000)
        )
        .catch(error => console.error('Error!', error.message))
})
