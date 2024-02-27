function submitForm() {
  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var pinCode = document.getElementById("pinCode").value;
  var address = document.getElementById("address").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var favoriteFood = document.getElementById("favoriteFood").value;

  // Create a new row in the table
  var table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);

  // Insert cells with form values
  var cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7),
  ];

  cells[0].innerHTML = firstName;
  cells[1].innerHTML = lastName;
  cells[2].innerHTML = state;
  cells[3].innerHTML = country;
  cells[4].innerHTML = pinCode;
  cells[5].innerHTML = address;
  cells[6].innerHTML = gender;
  cells[7].innerHTML = favoriteFood;

  // Reset the form
  resetForm();
}

function resetForm() {
  document.getElementById("myForm").reset();
}
