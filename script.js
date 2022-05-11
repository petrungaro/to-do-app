// query the DOM for the form element
const formElement = document.querySelector('form');


// add a submit event listener on the form
formElement.addEventListener('submit', function(e) {
    // // stop the page from refreshing when the form is submitted
    e.preventDefault();
    // only if the user has entered text:
    const inputElement = document.getElementById('toDoItem');
    // this[0] also works in place of querying for the element
    if (inputElement.value) {
        
        // grab the users input from the form
        // create a li element and store the users input as text inside the li
        const liElement = document.createElement('li');
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
        
        //create an element that represents the text we have to add ..
        const taskContent = document.createTextNode(inputElement.value);
        // .. and then append that to the li
        liElement.appendChild(taskContent);

        // put that li in the existing ul on the page
        document.querySelector('ul').appendChild(liElement);
        
        // clear the input
        inputElement.value = '';
    } else {
        alert('Please enter a task :)');
    }
});

// clicking on a task allows you to toggle between checked/unchecked (done  not done)

// const listElements = document.querySelector('li');

// listElements.addEventListener('click', function() {
//     console.log('To Do has been checked');
// });
// The above won't work because the li's don't exist on the page when we load, so instead we use...

// EVENT PROPAGATION to DELEGATE the click event to the ul 




// BONUSES
// add a 'reset' button which clears all the todo's
// add a 'remove task' button to each task
// add a congratulations alert when all the existing todos are checked off
// add a 'take a break' message after 5 tasks are completed
// add an 'edit task' button 