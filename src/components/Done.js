import React from 'react';
import TaskList from './TasksList';


const Done = () => {
   return (
       <div>
          <h1>Done</h1>
          {TaskList(true)}
       </div>
    );
}
 
export default Done;

