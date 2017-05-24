function add(event) {
	var type = event.target.parentNode.firstElementChild.value;

	console.log(event);
	console.log(event.target);
	console.log(type);

	if (type == "text")
		handleText(type, event);
	else if (type == input.button)
		handleButton();
	else if (type == input.radio)
		handleRadio();

	event.preventDefault();
}

function handleText(type, event) {
	//var type = event.target.parentNode.firstElementChild.value;
	console.log("handle text called\n");

	//Create an input type dynamically.
	var newDiv = document.createElement("div");
	var newText = document.createElement("textArea");

	//Assign different attributes to the element.
	newText.setAttribute("type", type);
	newText.setAttribute("value", type);
	newText.setAttribute("name", type);
	newText.setAttribute("id", "newText");
	newText.rows="10";
	newText.cols="50";

	var mainContainer = document.getElementById("mainContainer");
	var br = document.createElement("br");

	//Append the element in page (in span).
	newDiv.appendChild(newText);
	newDiv.appendChild(br);
	createButton(newDiv, "Cancel", event);
	createButton(newDiv, "Submit", event);

	mainContainer.appendChild(newDiv);
	event.preventDefault();
}

function handleButton() {}


function handleRadio() {}


function createButton(parent, type, event) {
	//var type = event.target.parentNode.firstElementChild.value;
	//create a button and set it attributes
	var button = document.createElement("input");
	button.setAttribute("id", type);
	button.setAttribute("type", "button");
	button.setAttribute("value", type);

	//add event listener according to button type
	if (type === "Cancel")
		button.addEventListener("click", deleteElement(event));
	if (type === "Submit")
		button.addEventListener("click", addContent(event));

	//append button
	parent.appendChild(button);
}

function addContent(event) {}

function deleteElement(event) {}
