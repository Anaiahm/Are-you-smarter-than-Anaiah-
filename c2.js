
//                          Question Buttons!

const correctButtonElement = document.querySelector('.correct-button');
correctButtonElement.addEventListener('click',() => {
console.log('Correct!');
});
const incorrectButtonElement = document.querySelector('.incorrect-button');
incorrectButtonElement.addEventListener('click',() => {
console.log('Wrong!');
});