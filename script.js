document.addEventListener("DOMContentLoaded", generateForm);

var fontOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];

i = 0;

//generate form for selection when page loaded
function generateForm() {
	//create a div and add a header
	var div = document.createElement("div");
	var header = document.createElement("h2");
	header.innerHTML = "Course Creation: ";
	div.appendChild(header);

	//append div created to html
	document.getElementById("menu").appendChild(div);

<<<<<<< HEAD
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
	else if (type === "Image")
		createImage();
=======
	//create a form
	var form = document.createElement("form");
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1

	//add options to the menu
	var menuOptions = ["Title", "Text", "Image"];
	createDropdown(menuOptions, "elementDropdown", form, "Select Element: ");

	//create add button
	createButton(form, "Add", '');

	//append form to html
	document.getElementById("menu").appendChild(form);
}

function createImage() {
	;
}

function createDropdown(menuOptions, id, parent, label) {
<<<<<<< HEAD

	var lab = document.createElement("label");
	lab.innerHTML = label;
	lab.style.display = 'block';
=======
	createLabel(parent, label, '');
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1
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
	parent.appendChild(select);
}

<<<<<<< HEAD
// this function creates a text area
function createTextArea(parent, type, innerText) {
=======
//create button according to buttonType and add appropriate event listener
function createButton(parent, buttonType, eleType ) {
	//create a button and set it attributes
	var button = document.createElement("input");
	button.setAttribute("id", buttonType);
	button.setAttribute("type", "button");
	button.setAttribute("name", buttonType+eleType);
	button.setAttribute("value", buttonType);

	//add event listener according to button type
	if (buttonType === "Cancel") 
		button.addEventListener("click", clearDynForm);
	if (buttonType === "Submit")
		button.addEventListener("click", addContent);
	if (buttonType === "Add") 
		button.addEventListener("click", add);
	if (buttonType === "Save") 
		button.addEventListener("click", editContent);
	if (buttonType === "Delete") 
		button.addEventListener("click", deleteElement);

	//append button
	parent.appendChild(button);
	event.preventDefault();
}

// add appropriate components to the form
function add(event) {
	//get element selected 
	var type = document.getElementById("elementDropdown").value;

	//call appropriate handler functions
	if (type == "Text")
		handleText(type);
	if (type === "Title")
		createHeader(type);
	if (type === "Image")
		handleImage(type);

	event.stopPropagation();
	event.preventDefault();
}

function handleText(type) {
	//empty all content in dynamicForm div
	clearDynForm();

	//Create an input type dynamically.
	var newDiv = document.createElement("div");
	createTextArea(newDiv, type, '');
	createBreak(newDiv);
	createBreak(newDiv);

	//append cancel and submit buttons
	createButton(newDiv, "Cancel", type);
	createButton(newDiv, "Submit", type);

	document.getElementById("dynamicForm").appendChild(newDiv);
	event.stopPropagation();
	event.preventDefault();
}

// this function creates a text area
function createTextArea(parent, type, innerText) {
	createBreak(parent);
	createLabel(parent, "Enter Text: ", "block");

>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1
	var element = document.createElement("textArea");
	element.innerHTML = innerText;

	//Assign different attributes to the element.
	element.setAttribute("type", type);
	element.setAttribute("value", type);
	element.setAttribute("name", type);
	element.setAttribute("id", "newText");
	element.rows="10";
	element.cols="50";
	element.style.display = "block";
	parent.appendChild(element);
<<<<<<< HEAD
	parent.appendChild(br);
	parent.appendChild(br);
	createDropdown(fontOptions, "fontDropdown", parent, "Select Font:  ");
	parent.appendChild(br);
=======

	//create a drop down menu for font selection
	createBreak(parent);
	var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
	createDropdown(menuOptions, "fontDropdown", parent, "Select Font: ");
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1
}

function createLabel(parent, innerText, display){
	var label = document.createElement("label");
	label.innerHTML = innerText;
	label.style.display = display;
	parent.appendChild(label);
}

function createText(parent, innerText){
	var textInput = document.createElement("input");
	textInput.setAttribute("type", "text");
	textInput.setAttribute("id", "newText");
	textInput.setAttribute("size", 50);
	textInput.value = innerText;
	parent.appendChild(textInput);
}

function createHeader(type) {
	clearDynForm();
	var parent = document.getElementById("dynamicForm");
	//header of all available types
<<<<<<< HEAD

	var headers = [];

	for (var i = 0; i < 6; ++i) {
		headers.push(document.createElement("h" + i + 1));
		headers[i].innerHTML = "Header";
		headers[i].style.display = "inline";
	}
=======
	var h1 = document.createElement("h1");
	var h2 = document.createElement("h2");
	var h3 = document.createElement("h3");
	var h4 = document.createElement("h4");
	var h5 = document.createElement("h5");
	var h6 = document.createElement("h6");

	//array of all headers created
	var headers = [h1, h2, h3, h4, h5, h6];
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1

	//set headers details
	for (var i = 0; i < 6; i++){
		headers[i].innerHTML = "Title";
		headers[i].style.display = "inline";
	}

	//create a new div for header choices
	var div = document.createElement("div");
	createBreak(div);
	createLabel(div, "Select Size: ", "block");

	//create a radio button for each header choices
	for (var i = 6; i > 0; i--) {
		var radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("name", "headerSize");
		radio.setAttribute("value", "h"+i);
		radio.setAttribute("id", "h"+i);
		div.appendChild(radio);
		div.appendChild(headers[i-1]);
		createBreak(div);
	}

<<<<<<< HEAD
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
	createDropdown(fontOptions, "fontDropdown", div, "Select Font:  ");
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
=======
	createBreak(div);
	createLabel(div, "Enter Title: ", '');
	createText(div, '');
	createBreak(div);
	
	//add drop down for font selection
	createBreak(div);
	var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
	createDropdown(menuOptions, "fontDropdown", div, "Select Font:  ");
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1

	//append cancel and submit buttons
	createBreak(div);
	createBreak(div);
	createButton(div, "Cancel", type);
	createButton(div, "Submit", type);

	//createBreak(div);
	parent.appendChild(div);

}

function handleImage(type) {
	var parent = document.getElementById("dynamicForm");
	clearDynForm();

	var newDiv = document.createElement("div");
	var img = document.createElement("div");
	img.setAttribute("id", "image")

	var file = document.createElement("input");
	file.setAttribute("type", "file");
	file.setAttribute("id", "imgID");
	file.style.display = "block";
	file.addEventListener('change', readURL);

	newDiv.appendChild(img);
	newDiv.appendChild(file);
	
	createBreak(newDiv);
	createButton(newDiv, "Cancel", type);
	createButton(newDiv, "Submit", type);

	parent.appendChild(newDiv);
}

function readURL(){
	var file = document.getElementById("imgID").files[0];
	var reader = new FileReader();
	reader.onloadend = function(){
		document.getElementById("image").style.backgroundImage = "url(" + reader.result + ")";        
	}
	if(file)
		reader.readAsDataURL(file);
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
	else if (fontStyle === "Times Roman")
		p.style.fontFamily = 'roman';
}

//add user's submitted content to the page
function addContent(event) {
	console.log("submit button clicked");
	console.log(event);

	var parent = document.getElementById("courseContent");
	var div = document.createElement("div");
	div.setAttribute("id", "div"+i);

	var editButton = document.createElement("input");
	editButton.setAttribute("type", "button");
	editButton.setAttribute("id", "Edit"+i);
	editButton.setAttribute("value", "Edit");

	//add a paragraph to course content
	if (event.target.name === "SubmitText") {
		var p = document.createElement("p");
		p.setAttribute("id", "paragraph"+i);
		p.innerHTML = document.getElementById("newText").value;
		setFontStyle(p);
		div.appendChild(p);

		//populated the textbox with value already entered for editing
		editButton.addEventListener("click", function (event){
			console.log(event);
			clearDynForm();
			var newDiv = document.createElement("div");
			createTextArea(newDiv, "Text", event.target.previousElementSibling.textContent);

			//append cancel and save button
			createButton(newDiv, "Cancel", "Text");
			createButton(newDiv, "Save", p.id);
			document.getElementById("dynamicForm").appendChild(newDiv);

			event.stopPropagation();
			event.preventDefault();
		});
		
		div.appendChild(editButton);
		createButton(div, "Delete", div.id);
		parent.appendChild(div);
		clearDynForm();
	}

	//add a header to course content
	if (event.target.name === "SubmitTitle") {
		var header;

		//check which header size is chosen
		if (document.getElementById("h1").checked)
			header = document.createElement("h1");
		else if (document.getElementById("h2").checked)
			header = document.createElement("h2");
		else if (document.getElementById("h3").checked)
			header = document.createElement("h3");
		else if (document.getElementById("h4").checked)
			header = document.createElement("h4");
		else if (document.getElementById("h5").checked)
			header = document.createElement("h5");
		else if (document.getElementById("h6").checked)
			header = document.createElement("h6");
		else{
			alert("Please select a size!");
			return;
		}

		//get header title
		header.innerHTML = document.getElementById("newText").value;
		header.setAttribute("id", "header"+i);
		setFontStyle(header);

		//append to div
		div.appendChild(header);

		//populate editing form with entered value
		editButton.addEventListener("click", function (event){
			//create a header for input
			clearDynForm();
			var newDiv = document.createElement("div");
			createBreak(newDiv);
			createLabel(newDiv, "Edit Title: ", '');

			//create text input for header title
<<<<<<< HEAD
			var textInput = document.createElement("input");
			textInput.setAttribute("type", "text");
			textInput.setAttribute("id", "newText");
			textInput.setAttribute("size", 50);
			console.log(event.target.previousElementSibling.textContent);
			textInput.value = event.target.previousElementSibling.textContent;
			newDiv.appendChild(textInput);

			newDiv.appendChild(document.createElement("br"));
			createDropdown(fontOptions, "fontDropdown", newDiv, "Select Font:  ");
			newDiv.appendChild(document.createElement("br"));
=======
			createText(newDiv, event.target.previousElementSibling.textContent);
			createBreak(newDiv);
			
			var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
			createDropdown(menuOptions, "fontDropdown", newDiv, "Select Font:  ");
			createBreak(newDiv);
			createBreak(newDiv);
>>>>>>> dbc82ebfb22ca4b01c64a5401c17d1d8f51aeff1

			//create cancel, submit buttons
			createButton(newDiv, "Cancel", header.id);
			createButton(newDiv, "Save", header.id);
			document.getElementById("dynamicForm").appendChild(newDiv);

		});

		div.appendChild(editButton);
		createButton(div, "Delete", div.id);
		parent.appendChild(div);
		clearDynForm();
	}

	if (event.target.name === "SubmitImage") {
		createBreak(div);
		div.appendChild(document.getElementById("image"));
		createButton(div, "Delete", div.id);
		parent.appendChild(div);
		clearDynForm();
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

	//delete dynamic form
	clearDynForm();
}

function deleteElement(event) {
	var parentElementToDelete = event.target.parentNode.parentNode;
	var elementToDelete = event.target.parentNode;
	parentElementToDelete.removeChild(elementToDelete);
}

//clear dynamic form from page
function clearDynForm() {
	var parent = document.getElementById("dynamicForm");
	if (parent.childElementCount > 0) {
		while (parent.firstChild != null) {
			parent.removeChild(parent.firstChild);
		}
	}
}

function createBreak(parent) {
	parent.appendChild(document.createElement("br"));
}

