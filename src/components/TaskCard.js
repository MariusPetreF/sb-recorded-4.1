import "./TaskCard.css";

function TaskCard() {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">T-1</p>
        <div className="badge">
          <p>Todo</p>
        </div>
      </div>
      <div className="card-content">
        <p>Create a Design System for Enum Workspace.</p>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}

export default TaskCard;
