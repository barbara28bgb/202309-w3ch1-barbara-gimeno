const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(event.target);
});

let sender;
let addressee;
let affair;
let emailBody;
let atttch;
let programSend;
let dateTime;
