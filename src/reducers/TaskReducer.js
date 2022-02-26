export const Action = {
    ADD_TASK: "add-task",
    CHECK_TASK: "check-task",
    REMOVE_TASK: "remove-task"
}

export const TaskReducer = (state, action) => {
    switch (action.type) {
        case Action.ADD_TASK: {
            return [...state, action.task]
        }
        case Action.CHECK_TASK:
            let taskIndex = state.findIndex(task => task.id === action.task.id);
            if (taskIndex === -1) {
                return state
            }
            state[taskIndex].isDone = action.task.isDone
            return state.filter(task => task.id !== action.id);

        case Action.REMOVE_TASK: {
            let filteredTasks = state.filter(task => task.id !== action.id)
            return filteredTasks ? filteredTasks : [];
        }
        default:
            return state;
    }
}