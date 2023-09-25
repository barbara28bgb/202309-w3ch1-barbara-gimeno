const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(event.target);
});

// const formElementAffair = document.querySelector("#affair");

// formElementAffair.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

let sender;
let addressee;
let affair;
let emailBody;
let atttch;
let programSend;
let dateTime;

const validateForm = (form) => {
  console.log(form);
};
