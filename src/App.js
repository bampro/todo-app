import "./App.css";
import "./assets/styles.css";

import { useState } from "react";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Phusit Prakit",
      desc: "Testing React",
      id: 1,
      startdate: "2021-12-11",
      enddate: "2021-12-12",
      complete: false,
    },
    {
      name: "Sanan Prakit",
      desc: "Complete React",
      id: 2,
      startdate: "2021-12-12",
      enddate: "2021-12-12",
      complete: false,
    },
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ name, desc, startdate, enddate }) => {
    console.log("saving tasks");
    setTasks([
      { name: name, desc: desc, startdate: startdate, enddate: enddate, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;
