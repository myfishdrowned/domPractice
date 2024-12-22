document.title = 'working with the DOM';
document.body.style.backgroundColor = '#181818';
// document.body.style.color = 'silver';
document.getElementById('paragraph').style.color = 'silver';

const newElement = document.createElement('div');

newElement.id = 'greeting';

newElement.textContent = 'hello world';

document.body.append(newElement);

document.getElementById('greeting').style.color = 'green';
