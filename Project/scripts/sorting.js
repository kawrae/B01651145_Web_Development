$(document).ready(function () {
    $("#addPersonBtn").click(function () {
        var nameText = $("#nameInput").val();
        var DOB = $("#dateOfBirth").val();
        var incomeText = $("#incomeInput").val();

        if (nameText && DOB && incomeText) {
            $("#personList").append(`
                <li data-dob="${DOB}" data-income="${incomeText}">
                    <span class="personName">${nameText}</span> - 
                    <span class="personDOB">${DOB}</span> - 
                    <span class="personIncome">£${incomeText}</span>
                </li>
            `);

            $("#nameInput").val("");
            $("#dateOfBirth").val("");
            $("#incomeInput").val("");
        } else {
            alert("Please fill in all fields!");
        }
    });

    $("#sortByIncome").click(function () {
        var people = $("#personList li").get();
        people.sort(function (a, b) {
            return parseFloat($(a).data("income")) - parseFloat($(b).data("income"));
        });
        $.each(people, function (index, person) {
            $("#personList").append(person);
        });
    });

    $("#sortByDOB").click(function () {
        var people = $("#personList li").get();
        people.sort(function (a, b) {
            return new Date($(a).data("dob")) - new Date($(b).data("dob"));
        });
        $.each(people, function (index, person) {
            $("#personList").append(person);
        });
    });
});
