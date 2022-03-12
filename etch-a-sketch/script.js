
/*SETS UP FIRST GRID*/

const container = document.getElementById('container');
let gridLength = 16;
let drawingColor = 'cornflowerblue';

for (let i = 0; i < gridLength*gridLength; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}




/*REMOVES BOXES*/
const removeButton = document.getElementById('remove');

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

removeButton.addEventListener("click", reset); 




/*SETS ROW SIZE*/
const gridButton = document.getElementById('gridButton');
gridLength = document.getElementById('chicken').value;

function gridMaker() {
    for (let i = 0; i < gridLength*gridLength; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.setProperty('width', 480/gridLength + 'px' )
        box.style.setProperty('height', 480/gridLength + 'px')
        container.appendChild(box);
    }
    
}

gridButton.addEventListener('click', gridMaker)

/*Color picker*/
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');

function green () {
    drawingColor = 'lightgreen';
}

function blue () {
    drawingColor = 'cornflowerblue';
}

function red () {
    drawingColor = 'lightcoral';
}
function yellow () {
    drawingColor = 'palegoldenrod';
}

greenButton.addEventListener('click', green)
blueButton.addEventListener('click', blue)
redButton.addEventListener('click', red)
yellowButton.addEventListener('click', yellow)


container.addEventListener("mouseover", function(event) {
    
    
    event.target.style.backgroundColor = drawingColor;
    container.style.backgroundColor = 'black';
}
);
