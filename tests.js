QUnit.test( "form generator", function(assert) {
	var elem = document.getElementById("menu");
	assert.equal(elem.children[0].children[0].innerHTML, 'Course Creation: ', 'header with correct value');
	assert.equal(elem.children[1].children[0].innerHTML, "Select element to add:", 'form with correct title');
	assert.equal(elem.children[1].children[1].id, "selectMenu", "Selection menu is created");
	assert.equal(elem.children[1].children[1].children[0].value, "Header", "Header option is created");
	assert.equal(elem.children[1].children[1].children[1].value, "Text", "Text option is created");
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
	assert.ok(document.getElementById("newText") == null, "Form deleted");
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
	document.getElementById("edit0").click();
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
	document.getElementById("selectMenu").value == "Text";
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
	document.getElementById("selectMenu").value = "Text";
	document.getElementById("Add").click();
	assert.ok(document.getElementById("newText") != null, "Form created");
   	document.getElementById("newText").value = "Testing";
   	document.getElementById("Submit").click();
   	assert.equal(document.getElementById("courseContent").lastElementChild.children.paragraph1.innerHTML, "Testing", "text added");
});