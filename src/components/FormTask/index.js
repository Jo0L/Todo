import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Action } from "../../reducers/TaskReducer";
import { v1 as uuid } from "uuid";

const FormTask = ({handleSubmit}) => {
  const { dispatch } = useContext(TaskContext);
    function handleAdd(event){
      event.preventDefault();
      dispatch({
        type: Action.ADD_TASK,
        task: {
          id: uuid(),
          data: event.target.data.value,
          date: new Date().toUTCString(),
          isDone: false
        }
      });
      event.target.reset();
      handleSubmit();
    };
        
    return (
      <form onSubmit={handleAdd}>
        <h4>
          <label>
            What needs to be done?
          </label>
        </h4>
        <input
          type="text"
          id="new-todo-input"
          name="data"
          refs="inputTask"
          autoComplete="off"
        />
        <button type="submit">
          Add
        </button>
      </form>
    );
};

export default FormTask;
