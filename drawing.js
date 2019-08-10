let namesInDrawing = [];


/* Adds a field for the user to enter an additional name*/
function addNewName(event) {

	// Container <div> where dynamic content will be placed
	let number = 1;

    let container = document.getElementById("names");
    let rows = container.childElementCount;
    let cols = container.children[rows - 1].childElementCount;
    let nextNameNum = ((rows - 1) * 3) + cols + 1;

    // Create an input element and set its attributes
	let input = document.createElement("input");
    input.type = "text";
    input.name = "name" + nextNameNum;
    input.className = "form-control";
    input.placeholder = "Name " + nextNameNum;
    
	// If there are already three columns, create a new row
	if (cols % 3 === 0) {

		var newRow = document.createElement("div");
		newRow.className = "form-row";
		var newCol = document.createElement("div");
		newCol.className = "col-4";

		// add input to new row
		newCol.appendChild(input);

		newRow.appendChild(newCol);

		// add new row to form
		container.appendChild(newRow);

	}
	// Otherwise, add the column right after the next one
	else {
		var newCol = document.createElement("div");
		newCol.className = "col-4";

		// add input to new row
		newCol.appendChild(input);
		container.children[rows - 1].appendChild(newCol);
	}
}

function addNamesToDrawing(event) {

}

document.getElementById('addNameBtn').addEventListener('click', addNewName, false);
document.getElementById('drawNames').addEventListener('click', addNewName, false);

