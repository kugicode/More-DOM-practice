//getting the id's and inserting them into variables so we can use the later.
const input = document.getElementById('input-list');
const button = document.getElementById('butn');
const list = document.getElementById('list-items');
const anotherButton = document.getElementById('another-button');

button.addEventListener('click', () => {
    //getting the input from the user and storing in text
    const text = input.value.trim();
    //if no text is written you cannot enter task
    if(text === '') return;
    //creating the element for unordered list and saving it to a variable
    const newText = document.createElement('li');
    newText.textContent = text;
    newText.style.cursor = 'pointer';

    newText.addEventListener('click', () => {
        //setting newtext to toggle css when clicked.
        newText.classList.toggle('completed');
    });
    //append the text to the list 
    list.appendChild(newText);
    //clear the input
    input.value = "";

});

anotherButton.addEventListener('click', () => {
//remove only the text that have been shown as complete when the button clear is pressed.
const clear = document.querySelectorAll('.completed')
clear.forEach(item => item.remove());

});