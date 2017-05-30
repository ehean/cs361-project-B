document.addEventListener("DOMContentLoaded", generateForm);

i = 0;



/***************************************************************
** Helper Functions
** These functions simplify HTML-manipulation.
****************************************************************/

// This function takes a Div as an argument and creates a Div,
// textArea, and input and cancel buttons. You will need to
// append div to a parent to add it to the page.
function createInput(parent, child, type, innerText) {

	if (type === "Text")
		createTextArea(child, type, innerText);
	else if (type === "Header")
		createHeaders(child);
	//Append the element in page (in span).


	//append cancel and submit buttons
	createButton(child, "Cancel", type);
	createButton(child, "Submit", type);

	parent.appendChild(child);
}

function createDropdown(menuOptions, id, parent, label) {

	// var br = document.createElement("br");
	// parent.appendChild(br);
	var lab = document.createElement("label");
	lab.innerHTML = label;
	lab.style.display = 'block';
	var select = document.createElement("select");
	select.setAttribute("id", id);

	for (var i = 0; i < menuOptions.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("id", "add" + menuOptions[i]);
		option.setAttribute("name", menuOptions[i]);
		option.setAttribute("value", menuOptions[i]);
		option.innerHTML = menuOptions[i];
		select.appendChild(option);
	}
	parent.appendChild(lab);
	parent.appendChild(select);
}

// this function creates a text area
function createTextArea(parent, type, innerText) {
	var element = document.createElement("textArea");
	var fontDropdown = document.createElement("select");

	var select = document.createElement("select");

	element.innerHTML = innerText;
	select.setAttribute("id", "fontDropdown");

	//add options to the menu

	// //
	var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];

	//Assign different attributes to the element.
	element.setAttribute("type", type);
	element.setAttribute("value", type);
	element.setAttribute("name", type);
	element.setAttribute("id", "newText");
	element.rows="10";
	element.cols="50";

	var br = document.createElement("br");
	parent.appendChild(element);
	parent.appendChild(br);
	parent.appendChild(br);
	createDropdown(menuOptions, "fontDropdown", parent, "Select Font:  ");
	parent.appendChild(br);
}


function createHeaders(parent) {

	//header of all available types
	var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
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
	div.appendChild(br);
	createDropdown(menuOptions, "fontDropdown", div, "Select Font:  ");
	div.appendChild(br);
	parent.appendChild(div);

}

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
	//var legend = document.createElement("legend");
	//legend.innerHTML = "Select element to add:";
	//form.appendChild(legend);

	//create a drop down menu
//	var select = document.createElement("select");
	//select.setAttribute("id", "selectMenu");

	//add options to the menu
	var menuOptions = ["Header", "Text"];
	createDropdown(menuOptions, "elementDropdown", form, "Select Element:  ");

	//append drop down to form
	//form.appendChild(select);

	//create add button
	createButton(form, "Add", '');

	//append form to html
	document.getElementById("menu").appendChild(form);
}

// add appropriate components to the form
function add(event) {
	var type = event.target.parentNode.children[1].value;

	if (type == "Text")
		handleText(type);
	else if (type === "Header"){
		handleHeader(type);
	}
	event.stopPropagation();
	event.preventDefault();
}

//create textbox
function handleText(type) {
	//empty all content in dynamicForm div
	var dynForm = document.getElementById("dynamicForm");
	clearDynForm(dynForm);

	//Create an input type dynamically.
	var newDiv = document.createElement("div");
	createInput(dynForm, newDiv, type, '');

	event.stopPropagation();
	event.preventDefault();
}

//present header options and textbox for user to entered
function handleHeader(type) {
	//empty all content in dynamicForm div
	var dynForm = document.getElementById("dynamicForm");
	var newDiv = document.createElement("div");
	createInput(dynForm, newDiv, type, '');

	//append div to dynForm
	//dynForm.appendChild(newDiv);
}

//create button according to buttonType and add appropriate event listener
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

	if (buttonType === "Delete") {
		button.addEventListener("click", deleteElement);
	}

	//append button
	parent.appendChild(button);
	event.preventDefault();
}


function setFontStyle(p) {

	var fontStyle = document.getElementById("fontDropdown").value;
	console.log(fontStyle);

	if (fontStyle === "Bold") {
		// set p to Bold
		p.style.fontWeight = 'bolder';
	}
	else if (fontStyle === "Light")
		p.style.fontWeight = 'lighter';
	else if (fontStyle === "Normal")
		p.style.fontStyle = 'normal';
	else if (fontStyle === "Italic")
		p.style.fontStyle = 'italic';
	else if (fontStyle === "Courier")
		p.style.fontFamily = 'courier';
	else if (fontStyle === "Roman")
		p.style.fontFamily = 'roman';
}

//add user's submitted content to the page
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
		setFontStyle(p);

		//edit button for editing
		var editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		editButton.setAttribute("id", "Edit");
		editButton.setAttribute("value", "Edit");

		//populated the textbox with value already entered for editing
		editButton.addEventListener("click", function (event){
			console.log(event);
			var dynForm = document.getElementById("dynamicForm");

			//Create an input type dynamically
			var newDiv = document.createElement("div");

			createTextArea(newDiv, "Text", event.target.previousElementSibling.textContent);

			// var element = document.createElement("textArea");
			//
			// var type = "Text";
			// //Assign different attributes to the element.
			// element.setAttribute("type", type);
			// element.innerHTML = event.target.previousElementSibling.textContent;
			// element.setAttribute("name", type);
			// element.setAttribute("id", "newText");
			// element.rows="10";
			// element.cols="50";
			//
			// var br = document.createElement("br");
			//
			// //Append the element in page (in span).
			// newDiv.appendChild(element);
			// newDiv.appendChild(br);
			//
			// //append cancel and save button
			createButton(newDiv, "Cancel", "Text");
			createButton(newDiv, "Save", p.id);

			//
			dynForm.appendChild(newDiv);

			event.stopPropagation();
			event.preventDefault();
		});

		p.innerHTML = value;
		div.appendChild(p);
		div.appendChild(editButton);
		createButton(div, "Delete", div.id);
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
		header.innerHTML = document.getElementById("newText").value;
		header.setAttribute("id", "header"+i);
		setFontStyle(header);

		//append to div
		div.appendChild(header);

		//edit button for editing
		var editButton = document.createElement("input");
		editButton.setAttribute("type", "button");

		editButton.setAttribute("id", "Edit");

		editButton.setAttribute("id", "Edit");

		editButton.setAttribute("value", "Edit");

		//populate editing form with entered value
		editButton.addEventListener("click", function (event){
			//create a header for input
			var dynForm = document.getElementById("dynamicForm");
			var newDiv = document.createElement("div");

			var header2 = document.createElement("h3");
			header2.innerHTML = "Enter header: ";
			header2.style.display = "inline";
			newDiv.appendChild(header2);

			//create text input for header title
			var textInput = document.createElement("input");
			textInput.setAttribute("type", "text");
			textInput.setAttribute("id", "newText");
			textInput.setAttribute("size", 50);
			console.log(event.target.previousElementSibling.textContent);
			textInput.value = event.target.previousElementSibling.textContent;
			newDiv.appendChild(textInput);

			newDiv.appendChild(document.createElement("br"));
			var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
			createDropdown(menuOptions, "fontDropdown", newDiv, "Select Font:  ");
			newDiv.appendChild(document.createElement("br"));

			//create cancel, submit buttons
			createButton(newDiv, "Cancel", header.id);
			createButton(newDiv, "Save", header.id);

			dynForm.appendChild(newDiv);

		});

		div.appendChild(editButton);
		createButton(div, "Delete", div.id);
		parent.appendChild(div);
		deleteElement(event);
	}

	i++;

}

//edit content after user's hit save
function editContent(event) {
	//get element we are editing
	var prevP = event.target.name;
	prevP = prevP.substring(4);

	//get new value and set to element.innerHTML
	document.getElementById(prevP).innerHTML = document.getElementById("newText").value;
	setFontStyle(document.getElementById(prevP));
	//delete form
	deleteElement(event);
}

//delete an element from the page - usually the dynamic form
function deleteElement(event) {
	console.log(event);
	var parentElementToDelete = event.target.parentNode.parentNode;
	var elementToDelete = event.target.parentNode;
	parentElementToDelete.removeChild(elementToDelete);
}



//clear dynamic form from page
function clearDynForm(parent) {
	if (parent.childElementCount > 0) {
		while (parent.firstChild != null) {
			parent.removeChild(parent.firstChild);
		}
	}
}
