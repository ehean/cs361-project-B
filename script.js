var input = "document.forms[0].element";


async function handleText(type) {

	console.log("handle text called\n");

	//Create an input type dynamically.
	var newDiv = document.createElement("div");
	var element = document.createElement("textArea");

	//Assign different attributes to the element.
	element.setAttribute("type", type);
	element.setAttribute("value", type);
	element.setAttribute("name", type);


	var foo = document.getElementById("fooBar");

	//Append the element in page (in span).
	foo.appendChild(element);
}

function handleButton() {}


function handleRadio() {}

function add(type) {

	if (type == "text")
		handleText(type);
	else if (type == input.button)
		handleButton();
	else if (type == input.radio)
		handleRadio();



}