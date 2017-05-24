document.addEventListener("DOMContentLoaded", generateForm);

i = 0;

//generate form for selection when page loaded
function generateForm() {
	//create a div and add a header
	var div = document.createElement("div");
	var header = document.createElement("h1");
	header.innerHTML = "Course Creation: ";
	div.appendChild(header);

	//append div created to html
	document.getElementById("menu").appendChild(div);

	//create a form
	var form = document.createElement("form");
	var legend = document.createElement("legend");
	legend.innerHTML = "Select element to add:";
	form.appendChild(legend);

	//create a drop down menu
	var select = document.createElement("select");
	select.setAttribute("id", "selectMenu");

	//add options to the menu
	var menuOptions = ["Header", "Button", "Text", "Radio"];
	for (var i = 0; i < menuOptions.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("id", "add" + menuOptions[i]);
		option.setAttribute("name", menuOptions[i]);
		option.setAttribute("value", menuOptions[i]);
		option.innerHTML = menuOptions[i];
		select.appendChild(option);
	}

	//append drop down to form
	form.appendChild(select);

	//create add button
	createButton(form, "Add", '');

	//append form to html
	document.getElementById("menu").appendChild(form);
}


function add(event) {
	var type = event.target.parentNode.children[1].value;

	if (type == "Text")
		handleText(type);
	else if (type == "Button")
		handleButton();
	else if (type == "Radio")
		handleRadio();

	/*************changes*******************/
	else if (type === "Header")
		handleHeader(type);

	event.stopPropagation();
	event.preventDefault();
}

function handleText(type) {
	//empty all content in dynamicForm div
	var dynForm = document.getElementById("dynamicForm");
	clearDynForm(dynForm);

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

	var br = document.createElement("br");

	//Append the element in page (in span).
	newDiv.appendChild(element);
	newDiv.appendChild(br);

	/***************** changes *************************/
	createButton(newDiv, "Cancel", type);
	createButton(newDiv, "Submit", type);

	dynForm.appendChild(newDiv);

	event.stopPropagation();
	event.preventDefault();
}

function handleButton() {}


function handleRadio() {}

/***************** changes *************************/
function createButton(parent, buttonType, eleType ) {
	//create a button and set it attributes
	var button = document.createElement("input");
	button.setAttribute("id", buttonType);
	button.setAttribute("type", "button");
	button.setAttribute("name", buttonType+eleType);
	button.setAttribute("value", buttonType);

	//add event listener according to button type
	if (buttonType === "Cancel") {
		button.addEventListener("click", deleteElement);
	}
	if (buttonType === "Submit"){
		button.addEventListener("click", addContent);
	}
	if (buttonType === "Add") {
		button.addEventListener("click", add);
	}

	if (buttonType === "Save") {
		button.addEventListener("click", editContent);
	}

	//append button 
	parent.appendChild(button);
	event.preventDefault();
}

/******** new ********/
function addContent(event) {
	console.log("submit button clicked");
	console.log(event);

	var parent = document.getElementById("courseContent");
	var div = document.createElement("div");
	div.setAttribute("id", "div"+i);

	//add a paragraph to course content
	if (event.target.name === "SubmitText") {
		var value = event.target.parentNode.firstElementChild.value;
		var p = document.createElement("p");
		p.setAttribute("id", "paragraph"+i);
		var editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		editButton.setAttribute("id", "edit"+i);
		editButton.setAttribute("value", "Edit");
		editButton.addEventListener("click", function (event){
			console.log(event);
			var dynForm = document.getElementById("dynamicForm");
			//clearDynForm(dynForm);

			//Create an input type dynamically.
			var newDiv = document.createElement("div");
			var element = document.createElement("textArea");

			var type = "Text";
			//Assign different attributes to the element.
			element.setAttribute("type", type);
			element.innerHTML = event.target.previousElementSibling.textContent;
			element.setAttribute("name", type);
			element.setAttribute("id", "newText");
			element.rows="10";
			element.cols="50";

			var br = document.createElement("br");

			//Append the element in page (in span).
			newDiv.appendChild(element);
			newDiv.appendChild(br);

			/***************** changes *************************/
			createButton(newDiv, "Cancel", type);
			createButton(newDiv, "Save", p.id);

			dynForm.appendChild(newDiv);

			event.stopPropagation();
			event.preventDefault();
		});

		p.innerHTML = value;
		div.appendChild(p);
		div.appendChild(editButton);
		parent.appendChild(div);
		deleteElement(event);
	}
	
	//add a header to course content
	if (event.target.name === "SubmitHeader") {
		var header;

		//check which header size is chosen
		if (document.getElementById("h1").checked){
			header = document.createElement("h1");
		}
		if (document.getElementById("h2").checked){
			header = document.createElement("h2");
		}
		if (document.getElementById("h3").checked){
			header = document.createElement("h3");
		}
		if (document.getElementById("h4").checked){
			header = document.createElement("h4");
		}
		if (document.getElementById("h5").checked){
			header = document.createElement("h5");
		}
		if (document.getElementById("h6").checked){
			header = document.createElement("h6");
		}

		//get header title
		header.innerHTML = event.target.parentNode.children[21].value;
		header.setAttribute("id", "header"+i);
		//append to div
		div.appendChild(header);
		parent.appendChild(div);
		deleteElement(event);
	}

	i++;
	
}

function editContent(event) {
	console.log(event);
	var prevP = event.target.name;
	prevP = prevP.substring(4);
	console.log(prevP);
	document.getElementById(prevP).innerHTML = event.target.parentNode.firstElementChild.value;
}

/******** new ********/
function deleteElement(event) {
	console.log(event);
	var parentElementToDelete = event.target.parentNode.parentNode;
	var elementToDelete = event.target.parentNode;
	parentElementToDelete.removeChild(elementToDelete);
}

/******** new ********/
function handleHeader(type) {
	//empty all content in dynamicForm div
	var dynForm = document.getElementById("dynamicForm");
	clearDynForm(dynForm);

	//header of all available types
	var h1 = document.createElement("h1");
	h1.innerHTML = "Header";
	h1.style.display = "inline";

	var h2 = document.createElement("h2");
	h2.innerHTML = "Header";
	h2.style.display = "inline";

	var h3 = document.createElement("h3");
	h3.innerHTML = "Header";
	h3.style.display = "inline";

	var h4 = document.createElement("h4");
	h4.innerHTML = "Header";
	h4.style.display = "inline";

	var h5 = document.createElement("h5");
	h5.innerHTML = "Header";
	h5.style.display = "inline";

	var h6 = document.createElement("h6");
	h6.innerHTML = "Header";
	h6.style.display = "inline";

	var headers = [h1, h2, h3, h4, h5, h6];

	//create a new div for header choices
	var div = document.createElement("div");
	var header = document.createElement("h3");
	header.innerHTML = "Select header size: ";
	div.appendChild(header);

	//create a radio button for each header choices 
	for (var i = 6; i > 0; i--) {
		var radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("name", "headerSize");
		radio.setAttribute("value", "h"+i);
		radio.setAttribute("id", "h"+i);
		div.appendChild(radio);
		div.appendChild(headers[i-1]);
		var br = document.createElement("br");
		div.appendChild(br);
	}

	var br = document.createElement("br");
	div.appendChild(br);

	//create a header for input
	var header2 = document.createElement("h3");
	header2.innerHTML = "Enter header: ";
	header2.style.display = "inline";
	div.appendChild(header2);

	//create text input for header title
	var textInput = document.createElement("input");
	textInput.setAttribute("type", "text");
	textInput.setAttribute("id", "newText");
	textInput.setAttribute("size", 50);
	div.appendChild(textInput);

	//create cancel, submit buttons
	createButton(div, "Cancel", type);
	createButton(div, "Submit", type);

	//append div to dynForm
	dynForm.appendChild(div);
}

/*********** new **********************/
function clearDynForm(parent) {
	if (parent.childElementCount > 0) {
		while (parent.firstChild != null) {
			parent.removeChild(parent.firstChild);
		}
	}
}