$(document).ready(function(){
    $("#addTaskBtn").click(function(){
        var taskText = $("#taskInput").val();
        var taskPriority = $("#taskPriority").val();
        var taskDate = $("#taskDate").val();
        
        if(taskText && taskPriority && taskDate) {
            var colorClass = '';
            if (taskPriority === 'high') colorClass = 'red';
            else if (taskPriority === 'medium') colorClass = 'yellow';
            else if (taskPriority === 'low') colorClass = 'green';
            
            $("#taskList").append(`
                <li data-priority="${taskPriority}" data-date="${taskDate}" class="${colorClass}">
                    <input type="checkbox" class="taskCheckbox"> 
                    <span class="taskText">${taskText}</span> - 
                    <span class="taskPriority">${taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1)}</span> - 
                    <span class="taskDate">(${taskDate})</span>
                </li>
            `);
            
            $("#taskInput").val("");
            $("#taskPriority").val("medium");
            $("#taskDate").val("");
        }
    });

    $("#taskList").on("change", ".taskCheckbox", function(){
        $(this).closest("li").toggleClass("completed");
    });

    $("#removeCompletedBtn").click(function(){
        $(".completed").remove();
    });

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
