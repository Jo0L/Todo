import React, {Component, createContext} from "react";
import Moment from 'react-moment';
import 'moment-timezone';


const TaskContext = createContext();
class TaskProvider extends Component {
    state = {
        data:"",
        date: <Moment>{new Date()}</Moment>
    }

    setData = (data) => {
        this.setState((prevState) => ({data}))
    }

    
    
}

/*class Task extends React.Component{
    render
}

var listTasks = 

const TaskContext = createContext();
const TaskProvider = ({children}) => {
    const done = false;
};*/
