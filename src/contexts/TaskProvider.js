import React, {Component} from "react";
import TaskContext from "./TaskContext";

class TaskProvider extends Component {
    state = {
        cards: []
    }

    appendTask = (id, value) => {
        const cards = Object.assign({}, this.state.cards);
        this.cards = [...cards, {
            key: id,
            data: value,
            date: new Date().toUTCString(),
            isDone: false
        }]
    }

    updateTask(id, value){
        const cards = Object.assign({}, this.state.cards);
        cards[id].data = value;
        this.setState({cards});
    }

    updateMark(id){
        const cards = Object.assign({}, this.state.cards);
        cards[id].isDone = !cards[id].isDone;
        this.setState({cards});
    }

    delTask(id){
        let cards = Object.assign({}, this.state.cards);
        cards = cards.filter(item => item.id !== id);
        this.setState({cards});
    }


    render() {
        return (
            <TaskContext.Provider
                value={{cards: this.state.cards}}>
                {this.props.children}
            </TaskContext.Provider>
        );
    }    
}

export default TaskProvider;