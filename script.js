
// Data Insert and Display part start here
function studentForm(event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  const studentObj = {
    ID: id,
    NAME: name,
    AGE: age,
    EMAIL: email,
    COURSE: course
  }

  localStorage.setItem(id, JSON.stringify(studentObj));
  alert("Record submitted successfully");

  document.getElementById("id").value = '';
  document.getElementById("name").value = '';
  document.getElementById("age").value = '';
  document.getElementById("email").value = '';
  document.getElementById("course").value = '';

  displayStudentList();
}

function displayStudentList() {
  const studentTable = document.getElementById('studentList');
  studentTable.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const studentKey = localStorage.key(i);
    const studentData = JSON.parse(localStorage.getItem(studentKey));

    const tableData = document.createElement('tr');
    tableData.innerHTML = `
            <td>${studentData.ID}</td>
            <td>${studentData.NAME}</td>
            <td>${studentData.AGE}</td>
            <td>${studentData.EMAIL}</td>
            <td>${studentData.COURSE}</td>
            <td>
                <button class="edit-btn" onclick = studentRecordEdit('${studentData.ID}')>Edit</button>
                <button class="delete-btn" onclick = deleteStudentRecord('${studentData.ID}')>Delete</button>
            </td>
        `;
    studentTable.append(tableData);
  }
}

function pageLoading() {
  displayStudentList();
}

window.onload = pageLoading();
// Data Insert and Display part end here

// Data Delete part start here
function deleteStudentRecord(studentId) {
  localStorage.removeItem(studentId);
  displayStudentList();
}
// Data Delete part end here


// Data edit part start here
let editStudentData = false;
function studentRecordEdit(studentId) {
  const studentData = JSON.parse(localStorage.getItem(studentId));

  document.getElementById("id").value = studentData.ID;
  document.getElementById("name").value = studentData.NAME;
  document.getElementById("age").value = studentData.AGE;
  document.getElementById("email").value = studentData.EMAIL;
  document.getElementById("course").value = studentData.COURSE;

  document.getElementById("id").disabled = true;

  editStudentData = true;
  const editStudentId = studentId;
}
// Data edit part end here
