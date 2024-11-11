$(document).ready(function(){
    // Add Task Function
    $("#addTaskBtn").click(function(){
        var taskText = $("#taskInput").val();
        var taskPriority = $("#taskPriority").val(); // Get priority value
        var taskDate = $("#taskDate").val(); // Get date value
        
        if(taskText && taskPriority && taskDate) {
            // Set color based on priority
            var colorClass = '';
            if (taskPriority === 'high') colorClass = 'red';
            else if (taskPriority === 'medium') colorClass = 'yellow';
            else if (taskPriority === 'low') colorClass = 'green';
            
            // Append new task with priority and date
            $("#taskList").append(`
                <li data-priority="${taskPriority}" data-date="${taskDate}" class="${colorClass}">
                    <input type="checkbox" class="taskCheckbox"> 
                    <span class="taskText">${taskText}</span> - 
                    <span class="taskPriority">${taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1)}</span> - 
                    <span class="taskDate">(${taskDate})</span>
                </li>
            `);
            
            // Clear inputs
            $("#taskInput").val("");
            $("#taskPriority").val("medium");
            $("#taskDate").val("");
        }
    });

    // Display Tasks
    $("#taskList").on("change", ".taskCheckbox", function(){
        $(this).closest("li").toggleClass("completed");
    });

    // Remove Completed
    $("#removeCompletedBtn").click(function(){
        $(".completed").remove();
    });

    // Sort By Priority
    $("#sortByPriority").click(function(){
        var tasks = $("#taskList li").get();
        tasks.sort(function(a, b){
            var priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
            return priorityOrder[$(a).data("priority")] - priorityOrder[$(b).data("priority")];
        });
        $.each(tasks, function(index, task){
            $("#taskList").append(task);
        });
    });

    // Sort By Date
    $("#sortByDate").click(function(){
        var tasks = $("#taskList li").get();
        tasks.sort(function(a, b){
            return new Date($(a).data("date")) - new Date($(b).data("date"));
        });
        $.each(tasks, function(index, task){
            $("#taskList").append(task);
        });
    });
});
