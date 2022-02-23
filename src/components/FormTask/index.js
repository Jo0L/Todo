
//import { useForm } from "react-hook-form";

const FormTask = ({addTodo, handleSubmit}) => {
    //const { register, handleSubmit, watch, errors } = useForm();

    const handleAdd = (event) => {
      event.preventDefault();
      const formData = event.target.data.value;
      console.log("Form: ", formData);
      addTodo({
        data: formData,
        createdOn: +new Date()
      });
      event.target.reset();
      handleSubmit();
    };
        
    return (
      <form onSubmit={function eventHandler(event){handleAdd(event)}}>
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
