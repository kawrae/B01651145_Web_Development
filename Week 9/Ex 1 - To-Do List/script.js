$(document).ready(function(){

    $("#addTaskBtn").click(function(){
        var taskText = $("#taskInput").val();
        if (taskText) {
            $("#taskList").append(`<li><input type="checkbox" class="taskCheckbox"> ${taskText}</li>`);
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("change", ".taskCheckbox", function(){
        $(this).closest("li").toggleClass("completed");
    });

    $("#removeCompletedBtn").click(function(){
        $(".completed").remove();
    });
});