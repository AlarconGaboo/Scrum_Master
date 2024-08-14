document.addEventListener('DOMContentLoaded', () => {
    const taskInputs = document.querySelectorAll('.task-input');
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');

    const completedTasks = new Set();
    const pendingTasks = new Set();

    const taskMap = new Map();

    taskCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            const taskInput = taskInputs[index];
            const taskDescription = taskInput.value;

            if (checkbox.checked) {
                taskInput.style.textDecoration = "line-through"; // Tachar la tarea
                taskInput.disabled = true; // Deshabilitar la entrada de texto
                completedTasks.add(taskDescription);
                taskMap.set(`Task ${index + 1}`, { status: 'completed', description: taskDescription });
            } else {
                taskInput.style.textDecoration = "none"; // Quitar el tachado
                taskInput.disabled = false; // Habilitar la entrada de texto
                completedTasks.delete(taskDescription);
                pendingTasks.add(taskDescription);
                taskMap.set(`Task ${index + 1}`, { status: 'pending', description: taskDescription });
            }

            console.log(`Task ${index + 1}:`, taskMap.get(`Task ${index + 1}`));
        });
    });
});
