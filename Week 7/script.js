// Student array
const students = [];

// Get inputs from user 
const studentInput = document.getElementById("student");
const gradeInput = document.getElementById("grade");
const submitButton = document.getElementById("submit");

// Push inputs from user into the array
submitButton.addEventListener("click", () => {
    const studentName = studentInput.value.trim();
    const studentGrade = gradeInput.value.trim();

    if (studentName && studentGrade) {
        students.push({ name: studentName, grade: parseFloat(studentGrade) });

        studentInput.value = "";
        gradeInput.value = "";

        if (students.length === 4) {
            displayResults();
        }
    } else {
        alert("Please enter both a name and grade.");
    }
});

// Display Results Function
function displayResults() {
    const highestGradeStudent = students.reduce((prev, curr) => (prev.grade > curr.grade ? prev : curr));
    const lowestGradeStudent = students.reduce((prev, curr) => (prev.grade < curr.grade ? prev : curr));

    document.getElementById("highestMark").innerHTML = `Highest Grade Student: <span style="color: lime">${highestGradeStudent.name} - ${highestGradeStudent.grade}</span>`;
    document.getElementById("lowestMark").innerHTML = `Lowest Grade Student: <span style="color: red">${lowestGradeStudent.name} - ${lowestGradeStudent.grade}</span>`;
}