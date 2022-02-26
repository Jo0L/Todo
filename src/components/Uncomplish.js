import React, { Component, useState } from 'react';
import CustomPopup from './PopupTask';
import FormTask from './FormTask';
import TaskList from './TasksList';


const Uncomplish = () => {
   
   
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
            handleSubmit={popupCloseHandler}/>
      </CustomPopup>;

   return (
      <div>
         <h1>TODO</h1>
         {AddButton}
         {AddTask}
         {TaskList(false)}
      </div>
   );
}
 
export default Uncomplish;

