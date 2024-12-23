// document.title = 'working with the DOM';
// document.body.style.backgroundColor = '#181818';
// // document.body.style.color = 'silver';
// document.getElementById('paragraph').style.color = 'silver';

// const newElement = document.createElement('div');

// newElement.id = 'greeting';

// newElement.textContent = 'hello world';

// document.body.append(newElement);

// document.getElementById('greeting').style.color = 'green';


const redText = document.createElement('p')
redText.textContent = 'Hey I\'m red!'
console.log(redText);

const blueText = document.createElement('h3')
blueText.textContent = 'I\'m a blue h3!'
console.log(blueText);

const pink = document.createElement('div')
pink.textContent = 'I\'m pink'
pink.style.border = '2px solid black';
pink.style.backgroundColor = 'hotpink';
const header = document.createElement('h1')
header.textContent = 'I\'m in a div'
const paragraph = document.createElement('p')
paragraph.textContent = 'ME TOO'
pink.appendChild(header)
pink.appendChild(paragraph)
document.body.appendChild(pink)
console.log(pink);


