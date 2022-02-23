import React, { useState } from 'react';
import CustomPopup from './PopupTask';
import FormTask from './FormTask';
import Cards from './CardTask';
/*import Modal from 'react-bootstrap/Modal'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';*/

const Uncomplish = () => {
   


   /*const isOpen = false;
   const togglePopup = () => {
      isOpen = !isOpen;
   }
   const AddTask = (
      <Popup trigger={<button> Trigger</button>} position="right center" handleClose={togglePopup}>
      <label>
      Task:
      <input type="text" name="task" hidden="insert your new task" />
      </label>
      <input type="submit" value="SUBMIT" />
      </Popup>
      );
      
   const AddTask = props => {
      return (
         <div className="popup-box">
         <div className="box">
         <span className="close-icon" onClick={props.handleClose}>bbbbx</span>
         {props.content}
         </div>
      </div>);
   };*/
   
   /*const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleOpen = () => setShow(true);

   const Popup = <Modal 
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}>
         <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            blahblahblah
         </Modal.Body>
         <Modal.Footer>
            <button variant="primary">Understood</button>
         </Modal.Footer>
      </Modal>;
   */
   
   const [tasks, updateTasks] = useState([]);

   const [visibility, setVisibility] = useState(false);
   const popupCloseHandler = () => {
      setVisibility(false);
   };

   const AddButton = <button style={{
      border: "none",
      backgroundColor: "#e40e61",
      height: "80px",
      borderRadius: "50%",
      fontSize: 60,
      color: "#FFF",
      width:  "80px"}}
      onClick= {() => setVisibility(true)}
      children= "+"
   />;

   const AddTask = <CustomPopup
      onClose={popupCloseHandler}
      show={visibility}
      title="New Task">
         <FormTask 
            addTodo={task => updateTasks([...tasks, task])} 
            handleSubmit={popupCloseHandler}/>
      </CustomPopup>;

   return (
      <div>
         <h1>TODO</h1>
         <Cards tasks={tasks}/>
         {AddButton}
         {AddTask}
      </div>
   );
}
 
export default Uncomplish;

