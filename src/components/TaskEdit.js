import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ name: name, desc: desc, startdate: startdate, enddate: enddate });
    setName("");
    setDesc("");
    setStartDate("");
    setEndDate("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Start Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={startdate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="date">End Date</label>
        <input
          type="text"
          name="enddate"
          id="enddate"
          value={enddate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
