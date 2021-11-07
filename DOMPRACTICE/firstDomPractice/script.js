const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.style.cssText = 'color: red;';
red.textContent = 'Hey I\'m red!';

container.appendChild(red);

const blue = document.createElement('h3');
blue.style.cssText = 'color: blue;';
blue.textContent = 'I\'m a blue h3!';

container.appendChild(blue);

const insideADiv = document.createElement('div');
insideADiv.style.cssText = 'background-color:pink; border: black;';

const im = document.createElement('h1');
im.textContent = 'I\'m in a div';
const meToo = document.createElement('p');
meToo.textContent = 'ME TOO!'; 

insideADiv.appendChild(im);
insideADiv.appendChild(meToo);
container.appendChild(insideADiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
})