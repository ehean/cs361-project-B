document.addEventListener("DOMContentLoaded", generateForm);

var i = 0;
var menuOptions = [ "Normal", "Bold", "Light", "Italic", "Courier", "Times Roman"];
var colorOptions = ["Black", "Red", "Blue", "Green", "Purple", "Pink", "Brown", "Gray", "Yellow", "Orange"];

//generate form with selection of elements to add
function generateForm() {
	//create add a header
	var header = document.createElement("h2");
	header.innerHTML = "Course Creation: ";

	//append div created to html
	document.getElementById("menu").appendChild(header);

	//create a form and add options to selection menu
	var form = document.createElement("form");
	var menuOptions = ["Title", "Text", "Image"];
	createDropdown(menuOptions, "elementDropdown", form, "Select Element: ");

	//create add button
	createButton(form, "Add", '');

	//append form to html
	document.getElementById("menu").appendChild(form);
}

/*create a drop down menu with options passed in and append to parent element
 * parameters: menuOptions - options, id - id of drop down, parent - parent element
 *			   for appending drop down, label - label for drop down
 */
function createDropdown(menuOptions, id, parent, label) {
	//create label and append to parent
	createLabel(parent, label, '');

	//create select element for drop down
	var select = document.createElement("select");
	select.setAttribute("id", id);

	//add options to select element created
	for (var i = 0; i < menuOptions.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("id", "add" + menuOptions[i]);
		option.setAttribute("name", menuOptions[i]);
		option.setAttribute("value", menuOptions[i]);
		option.innerHTML = menuOptions[i];
		select.appendChild(option);
	}
	//append select element to parent
	parent.appendChild(select);
}

/* create button according to buttonType and add appropriate event listener
 * parameters: parent - parent element we are appending the button to
 *			  buttonType - type of button (cancel, submit, add, etc)
 *			  eleType - specify whether this button is for text/paragraph/header/etc
 */
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
	if (buttonType === "View Page"){
		button.addEventListener("click", handleViewPage);
		button.style.color = "Red";
	}

	//append button
	parent.appendChild(button);
	event.preventDefault();
}

/* create and append a new text area to page
 * paremeters: parent - parent element to append the textarea
 *			   type - type of text area
 *			   innerText - string to be populated in the textarea
 */
function createTextArea(parent, type, innerText) {
	//add a "Enter Text: " label
	createLabel(parent, "Enter Text: ", "block");

	//create new textarea element and set its attributes
	var element = document.createElement("textArea");
	element.innerHTML = innerText;
	element.setAttribute("type", type);
	element.setAttribute("value", type);
	element.setAttribute("name", type);
	element.setAttribute("id", "newText");

	//set the style of textarea
	element.rows="10";
	element.cols="50";
	element.style.display = "block";

	//append textarea to parent element
	parent.appendChild(element);

	//create drop down menus for font's style selection and font's color selection
	createDropdown(menuOptions, "fontDropdown", parent, "Select Font: ");
	createBreak(parent);
	createDropdown(colorOptions, "colorDropdown", parent, "Select Color: ");
}

/* create a label element 
 * parameters: parent - parent element to append the label
 *			   innerText - string value for label
 *			   display - display style for label
 */
function createLabel(parent, innerText, display){
	var label = document.createElement("label");
	label.innerHTML = innerText;
	label.style.display = display;
	parent.appendChild(label);
}

/* create a text element 
 * parameters: parent - parent element to append the text
 *			   innerText - string value for text
 */
function createText(parent, innerText){
	var textInput = document.createElement("input");
	textInput.setAttribute("type", "text");
	textInput.setAttribute("id", "newText");
	textInput.setAttribute("size", 50);
	textInput.value = innerText;
	parent.appendChild(textInput);
}

// Create a dynamic form with header options and text area for input
function createHeader(type) {
	//clear any element currently in dynamicForm
	clearDynForm();

	//create a header element of all available types
	var h1 = document.createElement("h1");
	var h2 = document.createElement("h2");
	var h3 = document.createElement("h3");
	var h4 = document.createElement("h4");
	var h5 = document.createElement("h5");
	var h6 = document.createElement("h6");

	//array of all headers created
	var headers = [h1, h2, h3, h4, h5, h6];

	//set headers details
	for (var i = 0; i < 6; i++){
		headers[i].innerHTML = "Title";
		headers[i].style.display = "inline";
	}

	//create a new div 
	var div = document.createElement("div");

	//add drop down for font's style selection and font's color selection
	createDropdown(menuOptions, "fontDropdown", div, "Select Font:  ");
	createBreak(div);
	createDropdown(colorOptions, "colorDropdown", div, "Select Color: ");

	//add a label to the div for header selection
	createLabel(div, "Select Size: ", "block");

	//create a radio button for each header choices and append to div created
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

	//add a label for text input and create a text area
	createLabel(div, "Enter Title: ", '');
	createText(div, '');

	//append cancel and submit buttons
	cancelSubmitButton(div, type);

	//append div to dynamicForm
	document.getElementById("dynamicForm").appendChild(div);
	document.getElementById("dynamicForm").style.borderStyle = "dotted";
}

//create a break element and append to parent
function createBreak(parent) {
	parent.appendChild(document.createElement("br"));
}

// handle the adding of specific components to the html
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

// add textarea input into a paragraph, and add event listener for edit button
function addParagraph(parent, editButton){
	//create a new paragraph and set it's attribute
	var p = document.createElement("p");
	p.setAttribute("id", "paragraph"+i);

	//set content of p to value entered in textarea element
	p.innerHTML = document.getElementById("newText").value;

	//set font's style and color
	setFontStyle(p);
	setFontColor(p);

	//append paragraph to parent
	parent.appendChild(p);

	//editButton eventListener
	editButton.addEventListener("click", function (event){
		//clear element currently in dynamicForm
		clearDynForm();

		//create a new div and textarea 
		var newDiv = document.createElement("div");

		//populated textarea with value to edit
		createTextArea(newDiv, "Text", event.target.previousElementSibling.textContent);

		//append cancel and save button
		createBreak(newDiv);
		createBreak(newDiv);
		createButton(newDiv, "Cancel", "Text");
		createButton(newDiv, "Save", p.id);

		//append new div to dynamicForm
		document.getElementById("dynamicForm").appendChild(newDiv);
		document.getElementById("dynamicForm").style.borderStyle = "dotted";
		event.stopPropagation();
		event.preventDefault();
	});
	//append editButton to parent
	parent.appendChild(editButton);
}

// get header size selected and create a header with text inputted
function addHeader(parent, editButton){
	var header;

	//check which header size is chosen, if none, alert user this is required and return
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
		return -1;
	}

	//get header title and set header's style
	header.innerHTML = document.getElementById("newText").value;
	header.setAttribute("id", "header"+i);
	setFontStyle(header);
	setFontColor(header);

	//append to div
	parent.appendChild(header);

	//populate editing form with entered value
	editButton.addEventListener("click", function (event){
		//clear content currently in dynamicForm
		clearDynForm();
		var newDiv = document.createElement("div");
		createLabel(newDiv, "Edit Title: ", '');

		//create text input for header title
		createText(newDiv, event.target.previousElementSibling.textContent);
		
		//create drop down for font's style and color
		createBreak(newDiv);
		createDropdown(menuOptions, "fontDropdown", newDiv, "Select Font:  ");
		createBreak(newDiv);
		createDropdown(colorOptions, "colorDropdown", newDiv, "Select Color: ");
		
		//create cancel, submit buttons
		createBreak(newDiv);
		createBreak(newDiv);
		createButton(newDiv, "Cancel", header.id);
		createButton(newDiv, "Save", header.id);

		//append new div to dynamicForm
		document.getElementById("dynamicForm").appendChild(newDiv);
		document.getElementById("dynamicForm").style.borderStyle = "dotted";
	});
	//append editButton to parent
	parent.appendChild(editButton);
	
}

//handle the adding of user's submitted content to html
function addContent(event) {
	var result = 0;
	//create a new div element and set its id
	var div = document.createElement("div");
	div.setAttribute("id", "div"+i);

	//create a new edit button and set its attributes
	var editButton = document.createElement("input");
	editButton.setAttribute("type", "button");
	editButton.setAttribute("id", "Edit"+i);
	editButton.setAttribute("value", "Edit");

	//add a paragraph to course content
	if (event.target.name === "SubmitText")
		addParagraph(div, editButton);

	//add a header to course content
	if (event.target.name === "SubmitTitle"){
		result = addHeader(div, editButton)
		if (result < 0)
			return;
	}

	//add a image to course content
	if (event.target.name === "SubmitImage") {
		createBreak(div);
		div.appendChild(document.getElementById("image"));
	}
	//create and append a delete button
	createButton(div, "Delete", div.id);
	
	//if current html has an element with id = "View Page", delete that element
	if (document.getElementById("View Page") != null)
		document.getElementById("View Page").parentElement.removeChild(document.getElementById("View Page"));

	// create and append a new View Page button
	createBreak(div);
	createButton(div, "View Page", '');
	document.getElementById("courseContent").appendChild(div);

	//clear content in dynamicForm
	clearDynForm();
	i++;
}

// facilitate the handling of adding a text area to the page
function handleText(type) {
	//empty all content currently in dynamicForm div
	clearDynForm();

	//create a new div and add a text area to this div
	var newDiv = document.createElement("div");
	createTextArea(newDiv, type, '');

	//append cancel and submit buttons
	cancelSubmitButton(newDiv, type);

	//append new div to dynamicForm
	document.getElementById("dynamicForm").appendChild(newDiv);
	document.getElementById("dynamicForm").style.borderStyle = "dotted";
	event.stopPropagation();
	event.preventDefault();
}

// create a dynamic form for uploading images
function handleImage(type) {
	//clear elements currently in dynamicForm
	clearDynForm();

	//create a new div
	var newDiv = document.createElement("div");
	createBreak(newDiv);

	//create a new div for putting uploaded image
	var img = document.createElement("div");
	img.setAttribute("id", "image")

	//create an input for getting image's file
	var file = document.createElement("input");
	file.setAttribute("type", "file");
	file.setAttribute("id", "imgID");
	file.style.display = "block";
	file.addEventListener('change', readURL);

	//append img and file to div
	newDiv.appendChild(img);
	newDiv.appendChild(file);
	
	//append cancel and submit buttons
	cancelSubmitButton(newDiv, type);

	//append new div to dynamicForm
	document.getElementById("dynamicForm").appendChild(newDiv);
	document.getElementById("dynamicForm").style.borderStyle = "dotted";
}

// generate a new html page when "View Page" button is clicked
function handleViewPage(event){
	//string to hold content to be added to this new html
	var pageContent = "<html><head><link rel='stylesheet' href='style.css'/></head><body><h1>Teach Anything!</h1>";

	//get courseContent element and number of divs in courseContent's element
	var parent = document.getElementById("courseContent");
	var numOfDiv = parent.childElementCount;
	
	//loop through all divs in courseContent
	for (var j = 0; j < numOfDiv; j++){
		//get courseContent's children
		var div = parent.children[j];
		pageContent += "<div>";

		//check if courseContent's children has any "input" or "br" elements
		//if yes, ignore them
		//else get the outerHTML of that child and add to pageContent
		for (var k = 0; k < div.childElementCount; k++){
			if (div.children[k].tagName === "INPUT" || div.children[k].tagName === "BR"){
			}
			else{
				pageContent += div.children[k].outerHTML;
			}
		}
		pageContent += "</div>";
	}
	//open a new HTML page and write pageContent to it's body
	var opened = window.open("");
	opened.document.write(pageContent + "</body></html>");
	event.preventDefault();
}

// create an url for the image files uploaded by user and append it to image div
function readURL(){
	var file = document.getElementById("imgID").files[0];
	var reader = new FileReader();
	reader.onloadend = function(){
		document.getElementById("image").style.backgroundImage = "url(" + reader.result + ")";        
	}
	if(file)
		reader.readAsDataURL(file);
} 

// set the font's style according to user's choice
function setFontStyle(p) {
	//get style selected from drop down menu
	var fontStyle = document.getElementById("fontDropdown").value;

	//set font according to style selected
	if (fontStyle === "Bold")
		p.style.fontWeight = 'bolder';
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

// set the font's color according to user's choice
function setFontColor(p) {
	//get color selected from drop down and set color
	var fontColor = document.getElementById("colorDropdown").value;
	p.style.color = fontColor;
}

//edit content after user's hit save
function editContent(event) {
	//get element we are editing
	var prevP = event.target.name;
	prevP = prevP.substring(4);

	//get new value and set to element.innerHTML
	document.getElementById(prevP).innerHTML = document.getElementById("newText").value;
	
	//edit font's style and color
	setFontStyle(document.getElementById(prevP));
	setFontColor(document.getElementById(prevP));

	//delete dynamic form
	clearDynForm();
}

//delete a element when "Delete" button is clicked
function deleteElement(event) {
	//get parent of element to be deleted
	var parentElementToDelete = event.target.parentNode.parentNode;
	//get element to be deleted
	var elementToDelete = event.target.parentNode;
	//delete element from parent
	parentElementToDelete.removeChild(elementToDelete);

	if (document.getElementById("courseContent").childElementCount > 0) {
		if (document.getElementById("View Page") == null) {
			createButton(document.getElementById("courseContent").lastElementChild, "View Page", '')
		}
	}
}

//clear all elements in dynamic form 
function clearDynForm() {
	var parent = document.getElementById("dynamicForm");
	//check if dynamicForm has any children
	//if yes, delete them
	if (parent.childElementCount > 0) {
		while (parent.firstChild != null) {
			parent.removeChild(parent.firstChild);
		}
	}
	parent.style.borderStyle = "none"; 
}

//facilitate the creation of cancel and submit buttons
function cancelSubmitButton(parent, type) {
	createBreak(parent);
	createBreak(parent);
	createButton(parent, "Cancel", type);
	createButton(parent, "Submit", type);
}
