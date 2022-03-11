
/*SETS UP FIRST GRID*/

const container = document.getElementById('container');
let gridLength = 16;

for (let i = 0; i < gridLength*gridLength; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'cornflowerblue';
    container.style.backgroundColor = 'black';
}
);



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
        container.appendChild(box);
    }
}

gridButton.addEventListener('click', gridMaker)
