const Card = ({ task, ...extra }) => (
  <div {...extra}>
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
};

export default Cards;

