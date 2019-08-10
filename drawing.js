let namesInDrawing = [];


/* Adds a field for the user to enter an additional name*/
function addNewName(event) {

	// Container <div> where dynamic content will be placed
    let container = document.getElementById("names");
    let rows = container.childElementCount;
    let cols = container.children[rows - 1].childElementCount;
    let nextNameNum = getNumberOfNames() + 1;

    // Create an input element and set its attributes
	let input = document.createElement("input");
    input.type = "text";
    input.name = "name" + nextNameNum;
    input.className = "form-control";
    input.placeholder = "Name " + nextNameNum;
    input.id = "name" + nextNameNum;
    
	// If there are already three columns, create a new row
	if (cols % 3 === 0) {

		let newRow = document.createElement("div");
		newRow.className = "form-row";
		let newCol = document.createElement("div");
		newCol.className = "col-4";


		// add input to new row
		newCol.appendChild(input);

		newRow.appendChild(newCol);

		// add new row to form
		container.appendChild(newRow);

	}
	// Otherwise, add the column right after the next one
	else {
		let newCol = document.createElement("div");
		newCol.className = "col-4";

		// add input to new row
		newCol.appendChild(input);
		container.children[rows - 1].appendChild(newCol);
	}
}

function getNumberOfNames() {
    let container = document.getElementById("names");
    let rows = container.childElementCount;
    let cols = container.children[rows - 1].childElementCount;
    return ((rows - 1) * 3) + cols;
}

function addNamesToDrawing(event) {
	let numNames = getNumberOfNames();

	for (let i = 0; i < numNames; ++i) {
		let nameID = "name" + (i + 1);
		let nameToAdd = document.getElementById(nameID).value;
		if (nameToAdd.length !== 0) {
			namesInDrawing.push(nameToAdd);
			document.getElementById(nameID).value = '';
		}
	}
	console.log(namesInDrawing);
}

document.getElementById('addNameBtn').addEventListener('click', addNewName, false);
document.getElementById('drawNames').addEventListener('click', addNamesToDrawing, false);

