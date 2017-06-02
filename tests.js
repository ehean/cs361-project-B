QUnit.test( "form generator", function(assert) {
	var elem = document.getElementById("menu");
	assert.equal(elem.children[0].innerHTML, 'Course Creation: ', 'header with correct value');
	assert.equal(elem.children[1].children[0].innerHTML, "Select Element: ", 'form with correct title');
	assert.equal(elem.children[1].children[1].id, "elementDropdown", "Selection menu is created");
	assert.equal(elem.children[1].children[1].children[0].value, "Title", "Header option is created");
	assert.equal(elem.children[1].children[1].children[1].value, "Text", "Text option is created");
	assert.equal(elem.children[1].children[1].children[2].value, "Image", "Image option is created");
	assert.equal(elem.children[1].children[2].type, "button", "Add Button is created");
});

QUnit.test("add header button clicked", function(assert) {
	document.getElementById("Add").click();
    assert.ok(document.getElementById("dynamicForm").childElementCount > 0, "Form created");
    assert.ok(document.getElementById("h1") != null, "H1 created");
    assert.ok(document.getElementById("h2") != null, "H2 created");
    assert.ok(document.getElementById("h3") != null, "H3 created");
    assert.ok(document.getElementById("h4") != null, "H4 created");
    assert.ok(document.getElementById("h5") != null, "H5 created");
    assert.ok(document.getElementById("h6") != null, "H6 created");
    assert.ok(document.getElementById("newText") != null, "Text box created");
    assert.ok(document.getElementById("Submit") != null, "Submit buton created");
    assert.ok(document.getElementById("Cancel") != null, "Cancel button created");
});

QUnit.test("header cancel button clicked", function(assert) {
	document.getElementById("Cancel").click();
	assert.ok(document.getElementById("dynamicForm").childElementCount == 0, "Form deleted");
});

QUnit.test("header submit button clicked", function(assert) {
	document.getElementById("Add").click();
    assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "Testing";
   	document.getElementById("h1").checked = true;
	document.getElementById("Submit").click();
	assert.ok(document.getElementById("courseContent").childElementCount > 0, "New header content added");
	assert.equal(document.getElementById("courseContent").children[0].children[0].innerHTML, "Testing", "Test value added");
});

QUnit.test("edit header", function(assert){
	document.getElementById("Edit0").click();
	assert.ok(document.getElementById("newText") != null, "Edit Form created");
	document.getElementById("newText").value = "New Testing";
	document.getElementById("Save").click();
	assert.equal(document.getElementById("courseContent").children[0].children[0].innerHTML, "New Testing", "Header edited");
});

QUnit.test("delete header", function(assert) {
	document.getElementById("Delete").click();
	assert.ok(document.getElementById("courseContent").childElementCount == 0, "Header deleted");
});

QUnit.test("add text button clicked", function(assert) {
	document.getElementById("elementDropdown").value == "Text";
	document.getElementById("Add").click();
	assert.ok(document.getElementById("dynamicForm").childElementCount > 0, "Form created");
	assert.ok(document.getElementById("newText") != null, "Text box created");
    assert.ok(document.getElementById("Submit") != null, "Submit buton created");
    assert.ok(document.getElementById("Cancel") != null, "Cancel button created");
});

QUnit.test("add text cancel button clicked", function(assert) {
	document.getElementById("Cancel").click();
	assert.ok(document.getElementById("newText") == null, "Form deleted");
});

QUnit.test("add text submit button clicked", function(assert) {
	document.getElementById("elementDropdown").value = "Text";
	document.getElementById("Add").click();
	assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "Testing";
   	document.getElementById("Submit").click();
   	assert.equal(document.getElementById("courseContent").lastElementChild.children.paragraph1.innerHTML, "Testing", "text added");
});

QUnit.test("edit text", function(assert) {
	document.getElementById("Edit1").click();
	assert.ok(document.getElementById("newText") != null, "Form created");
	document.getElementById("newText").value = "New Testing";
	document.getElementById("Save").click();
	assert.equal(document.getElementById("courseContent").lastElementChild.children.paragraph1.innerHTML, "New Testing", "text edited");
});

QUnit.test("delete text", function(assert) {
	document.getElementById("Delete").click();
	assert.ok(document.getElementById("courseContent").childElementCount == 0, "text deleted");
});

QUnit.test("add image button clicked", function(assert){
	document.getElementById("elementDropdown").value = "Image";
	document.getElementById("Add").click();
	assert.ok(document.getElementById("dynamicForm").childElementCount > 0, "Form created");
	assert.ok(document.getElementById("image") != null, "Image div created");
	assert.ok(document.getElementById("imgID") != null, "Input type file created");
	assert.ok(document.getElementById("Submit") != null, "Submit buton created");
    assert.ok(document.getElementById("Cancel") != null, "Cancel button created");
});

QUnit.test("add image submit button clicked", function(assert){
	document.getElementById("Submit").click();
	assert.ok(document.getElementById("image") != null, "Image added");
});

QUnit.test("delete image", function(assert) {
	document.getElementById("Delete").click();
	assert.ok(document.getElementById("image") == null, "Image deleted");
});

QUnit.test("italicize text", function(assert){
	document.getElementById("elementDropdown").value = "Text";
	document.getElementById("Add").click();
	assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "Testing";
   	document.getElementById("Submit").click();
   	document.getElementById("Edit3").click();
   	assert.ok(document.getElementById("newText") != null, "Form created");
	document.getElementById("newText").value = "italicize text";
	document.getElementById("fontDropdown").value = "Italic";
	document.getElementById("Save").click();
	assert.ok(document.getElementById("paragraph3").style.fontStyle == "italic", "Italiced text");
});

QUnit.test("change color of text", function(assert){
	document.getElementById("Edit3").click();
   	assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "italic red text";
   	document.getElementById("fontDropdown").value = "Italic";
	document.getElementById("colorDropdown").value = "Red";
	document.getElementById("Save").click();
	assert.ok(document.getElementById("paragraph3").style.color == "red", "Italiced red text");
});

QUnit.test("change font of header", function(assert){
	document.getElementById("elementDropdown").value = "Title";
	document.getElementById("Add").click();
    assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "Testing";
   	document.getElementById("h1").checked = true;
   	document.getElementById("fontDropdown").value = "Courier";
	document.getElementById("Submit").click();
	assert.ok(document.getElementById("header4").style.fontFamily == "courier", "Header is courier");
});

QUnit.test("generate new page", function(assert){
	assert.ok(document.getElementById("View Page") != null, "View Page button is present");
	document.getElementById("View Page").click();
})