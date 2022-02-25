import React, { Component, useState } from 'react';
import CustomPopup from './PopupTask';
import FormTask from './FormTask';
import Cards from './CardTask';
import TaskProvider from '../contexts/TaskProvider';
/*import Modal from 'react-bootstrap/Modal'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';*/
class NumOfTasks extends Component{
   static count = 0;
}

const Uncomplish = () => {
   
   
   const [tasks, updateTasks] = useState([]);

   const [visibility, setVisibility] = useState(false);
   const popupCloseHandler = () => {
      setVisibility(false);
   };

   const AddButton = <button style={{
      border: "none",
      backgroundColor: "#f2faf9",
      height: "60px",
      borderRadius: "50%",
      fontSize: 50,
      color: "#242424",
      width:  "60px"}}
      onClick= {() => setVisibility(true)}
      children= "+"
   />;

   const AddTask = <CustomPopup
      onClose={popupCloseHandler}
      show={visibility}
      title="New Task">
         <FormTask 
            addTodo={task => TaskProvider.appendTask = (++NumOfTasks.count, task)} 
            handleSubmit={popupCloseHandler}/>
      </CustomPopup>;

   return (
      <div>
         <h1>TODO</h1>
         <Cards tasks={tasks}/>
         {AddButton}
         {AddTask}
         {TaskProvider.app}
      </div>
   );
}
 
export default Uncomplish;

