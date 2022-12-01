import { useState } from "react";
import { useSelector } from "react-redux";

const AddTodo = ({ handleSubmit }) => {
  const [task, setTask] = useState("");
  const data = useSelector(list=>list)
  console.log(data)
  return (
    <div className="mt-3 row g-3">
      <label for="exampleFormControlInput1" className="form-label col">
        Add Task
      </label>
      <input
        type="text"
        className="form-control col"
        id="addtask"
        placeholder="add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="col">
        <button
          className="btn btn-primary "
          onClick={() => {
            handleSubmit(task);
            setTask("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
