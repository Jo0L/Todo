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
      backgroundColor: "#3f51b5",
      height: "60px",
      borderRadius: "50%",
      fontSize: 50,
      bottom: 0,
      color: "#0f0f0f",
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
         <div style={{display: "flex", flexDirection: "row"}}>
            <h1 style={{height: "60px",
                        textShadow: "-1px -1px 0 #091e94, \
                                       1px -1px 0 #091e94, \
                                       -1px 1px 0 #091e94, \
                                       1px 1px 0 #091e94"}}>TODO:</h1> 
            <p style={{width: "190px"}}/>
            {AddButton}
         </div>
         {AddTask}
         {TaskList(false)}
      </div>
   );
}
 
export default Uncomplish;

