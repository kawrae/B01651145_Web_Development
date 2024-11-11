let students = [];

const studentInput = document.getElementById("student");
const gradeInput = document.getElementById("grade");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

const nameError = document.getElementById("name-error");
const gradeError = document.getElementById("grade-error");

submitButton.addEventListener("click", () => {
    if (students.length >= 4) {
        alert("You have already entered 4 students. Please reset to enter new data.");
        return;
    }

    const studentName = studentInput.value.trim();
    const studentGrade = parseFloat(gradeInput.value.trim());
    const normalizedStudentName = studentName.toLowerCase();

    let valid = true;

    if (!studentName) {
        nameError.textContent = "Please enter a name.";
        valid = false;
    } else if (students.some(student => student.name.toLowerCase() === normalizedStudentName)) {
        nameError.textContent = "This student name has already been entered.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate grade
    if (isNaN(studentGrade) || studentGrade < 0 || studentGrade > 100) {
        gradeError.textContent = "Please enter a valid grade between 0 and 100.";
        valid = false;
    } else {
        gradeError.textContent = "";
    }

    if (valid) {
        students.push({ name: studentName, grade: studentGrade });
        studentInput.value = "";
        gradeInput.value = "";

        if (students.length === 4) {
            displayResults();
        }
        updateStudentCount();
        displayStudentList();
    }
});

function displayResults() {
    const highestGradeStudent = students.reduce((prev, curr) => (prev.grade > curr.grade ? prev : curr));
    const lowestGradeStudent = students.reduce((prev, curr) => (prev.grade < curr.grade ? prev : curr));
    const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

    document.getElementById("highestMark").innerHTML = `Highest Grade Student: <span style="color: lime">${highestGradeStudent.name} - ${highestGradeStudent.grade}</span>`;
    document.getElementById("lowestMark").innerHTML = `Lowest Grade Student: <span style="color: red">${lowestGradeStudent.name} - ${lowestGradeStudent.grade}</span>`;
    document.getElementById("averageMark").innerHTML = `Average Grade: <span style="color: blue">${averageGrade.toFixed(2)}</span>`;
}

function displayStudentList() {
    const tbody = document.querySelector("#student-list tbody");
    tbody.innerHTML = "";

    students.sort((a, b) => b.grade - a.grade).forEach(student => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function updateStudentCount() {
    const remaining = 4 - students.length;
    document.getElementById("studentCount").textContent = `Students entered: ${students.length}/4. ${remaining} more to go.`;
}

resetButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset? All data will be lost.")) {
        students = [];
        document.getElementById("highestMark").textContent = "Highest Grade Student:";
        document.getElementById("lowestMark").textContent = "Lowest Grade Student:";
        document.getElementById("averageMark").textContent = "Average Grade:";
        document.querySelector("#student-list tbody").innerHTML = "";
        updateStudentCount();
    }
});

window.addEventListener("load", () => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
        students = JSON.parse(storedData);
        updateStudentCount();
        displayResults();
        displayStudentList();
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("students", JSON.stringify(students));
});