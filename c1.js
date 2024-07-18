
//                          Question Buttons!

const correctButtonElement = document.querySelector('.correct-button');
correctButtonElement.addEventListener('click',() => {
console.log('Correct!');
});
let incorrectButtonElement = document.querySelector('.incorrect-button');
incorrectButtonElement.addEventListener('click',() => {
console.log('Wrong!');
});

// let correctButtonElement = document.querySelector('.correct-button');
// correctButtonElements.forEach(correctButtonElement => {
//     correctButtonElement.addEventListener('click',() => {
// console.log('Correct!');
// })});
// let incorrectButtonElement = document.querySelector('.incorrect-button');
// incorrectButtonElement.addEventListener('click',() => {
// console.log('Wrong!');
// });