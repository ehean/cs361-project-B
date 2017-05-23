function add(event) {
	var type = event.target.parentNode.firstElementChild.value;
	
	if (type == "text")
		handleText(type);
	else if (type == input.button)
		handleButton();
	else if (type == input.radio)
		handleRadio();

	event.preventDefault();
}

function handleText(type) {
	console.log("handle text called\n");

	//Create an input type dynamically.
	var newDiv = document.createElement("div");
	var element = document.createElement("textArea");

	//Assign different attributes to the element.
	element.setAttribute("type", type);
	element.setAttribute("value", type);
	element.setAttribute("name", type);
	element.setAttribute("id", "newText");
	element.rows="10";
	element.cols="50";

	var foo = document.getElementById("fooBar");
	var br = document.createElement("br");

	//Append the element in page (in span).
	newDiv.appendChild(element);
	newDiv.appendChild(br);
	createButton(newDiv, "Cancel");
	createButton(newDiv, "Submit");
	foo.appendChild(newDiv);
	event.preventDefault();
}

function handleButton() {}


function handleRadio() {}


function createButton(parent, type) {
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


