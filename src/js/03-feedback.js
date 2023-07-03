const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const key = "feedback-form-state";
const feedback = JSON.parse(localStorage.getItem(key)) || {email: '', message: ''};
form.email.value = feedback.email;
form.message.value = feedback.message;

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput (){
   feedback.email = form.email.value;
   feedback.message = form.message.value;
   localStorage.setItem(key, JSON.stringify(feedback))
}

function onSubmit(ev){
   ev.preventDefault();
   console.dir(feedback);
   localStorage.removeItem(key);
   form.email.value = '';
   form.message.value = '';
}