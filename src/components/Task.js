function Task({ task, onTglStatus }) {
  return (
    <div className="card text-left" key={task.id}>
      <div className="row">
        <div className="col-10">
          <h4>Name: {task.name}</h4>
          <h4>Description: {task.desc}</h4>
          Start Date: <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.startdate}
          </div>
          End Date: <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.enddate}
          </div>
        </div>

        <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
