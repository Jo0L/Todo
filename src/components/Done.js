import React from 'react';
import TaskList from './TasksList';


const Done = () => {
   return (
       <div>
          <h1 style={{height: "60px",
                      textShadow: "-1px -1px 0 #c2caf8, \
                                    1px -1px 0 #c2caf8, \
                                    -1px 1px 0 #c2caf8, \
                                    1px 1px 0 #c2caf8"}}>DONE:</h1>
          {TaskList(true)}
       </div>
    );
}
 
export default Done;

