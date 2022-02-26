import React, { createContext, useReducer } from 'react';
import { TaskReducer } from '../reducers/TaskReducer';

export const TaskContext = createContext();

const TaskProvider = (props) => {
    const [tasks, dispatch] = useReducer(TaskReducer,[])
    const sortedTasks = tasks.sort((t, f) =>  (f.isDone === t.isDone)? 0 : f.isDone? -1 : 1);
    return (
        <TaskContext.Provider value={{ tasks, sortedTasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;