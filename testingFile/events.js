console.log('I\'m in the javascript file');

// getting element by ID
const funElement = document.getElementById('fun');

// updating text using innerHTML attribute
funElement.innerHTML = "JavaScript is so fun I never want to use another programming language again!"

// replacing class list
funElement.className = "new-class new-class1 new-class2";

// adding new item to class list
funElement.classList.add("class2")

// update text color
funElement.style.color = 'purple';

// get list of elements matching a class name
// note the class name does not need to start with a dot like CSS class selectors
const pTagsByClass = document.getElementsByClassName('js-p-tag');


// get a tag (get list of all tags matching a, then grab first item from object)
const aTag = document.getElementsByTagName('a')[0];

//update href attribute of a tag
aTag.href = 'https://www.catoftheday.com/';

// a tag will have new href value
console.log(aTag);

// create h1 element 
const h1Element = document.createElement('h1');

// create text node
const h1Text = document.createTextNode('This is a new header');

// append text to new h1 element
h1Element.appendChild(h1Text);

// get html body element (get list of tags matching body, then get first item from object)
const bodyElement = document.getElementsByTagName('body')[0];

// append h1 element to body element
bodyElement.appendChild(h1Element);

// get element with id 'the-dom'
const domElement = document.getElementById('the-dom');

// remove the body element's child domElement
bodyElement.removeChild(domElement);

// get the list of elements matching the button tag
const buttonList = document.getElementsByTagName('button');

console.log(buttonList);

// event handler (arrow function)
// accepts 2 arguments - event and color
// updates the background color of the body element based on input
const changeBackground = (event, color) => {
    console.log(event);
    bodyElement.style.backgroundColor = color;
};

// BAD CODE: EVENT HANDLER FUNCTION IS TRIGGERED IMMEDIATELY
// solution: convert it into an anonymous function
// for (const btn of buttonList) {
//     console.log('im in the for loop');
//     btn.addEventListener('click', changeBackground('green'))
// };

// add event listeners to all buttons in buttonList
for (const btn of buttonList) {
    console.log('im in the for loop');
    // listen for click events
    // call the changeBackground() function when the event is triggered
    // note that the event handler argument is an anonymous function that accepts the event object as a parameter
    btn.addEventListener('click', (event) => changeBackground(event, event.target.textContent))
};


