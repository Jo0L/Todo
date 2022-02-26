import CardStyle from './card-style.module.css';
import { Fragment } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

const Card = props => (
    <Fragment>
        <h5>{props.data}</h5>
      <div>
        <small>{props.date}</small>
      </div>
    </Fragment>
);

const Cards = () => (
    <TaskContext>
        { context => (
            <Fragment>
                <h5>TODO</h5>
                {Object.keys(context.cards).map(id => (
                    <Card key={id}
                          data={context.cards[id].data}
                          date={context.cards[id].date}
                          isDone={context.cards[id].isDone}
                          updateTask={(value) => context.updateTask(id, value)}
                          updateMark={() => context.updateMark(id)}
                          delTask={() => context.delTask(id)}/>
                ))}
            </Fragment>
        )}
    </TaskContext>
);

export default Cards;

/*const Card = ({ task, ...extra }) => (
  <div {...extra} className={CardStyle.card}>
    <div>
      <h5>{task.data}</h5>
      <div>
        <small>{new Date(task.createdOn).toUTCString()}</small>
      </div>
    </div>
  </div>
);

const Cards = ({ tasks = [] }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Card task={task} key={index} />
      ))}
    </>
  );
};*/




