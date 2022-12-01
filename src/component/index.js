import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AxiosInstance } from "../axios";
import AddTodo from "./addTodo";
import Completed from "./completed";
import Header from "./header";
import Pending from "./pending";
import addTodo from "../redux/action/todo-action"

function Task() {
  const [pending, setPending] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState([]);
  const dispatch = useDispatch()

  const fetchPending = async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await AxiosInstance.get("/task", {
        params: { completed: false },
      });
      setPending(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
      setIsLoading(false);
    }
  };

  async function fetchCompleted() {
    const response = await AxiosInstance.get("/task", {
      params: { completed: true },
    });
    setCompleted(response.data.data);
  }

  useEffect(() => {
    fetchCompleted();
    fetchPending();
  }, []);

  const handleSubmit = async (arg) => {
    try {
      dispatch(addTodo({ description: arg,completed:false}))
      const response = await AxiosInstance.post("/task", { description: arg });
      console.log(response);
      if (response.status === 201) {
        fetchPending();
      }
    } catch (err) {}
  };

  const handleStatus = async (arg) => {
    console.log(arg);
    try {
      const response = await AxiosInstance.put(`/task/${arg._id}`, {
        completed: !arg.completed,
      });
      console.log(response);
      if (response.status === 200) {
        fetchCompleted();
      }
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <AddTodo handleSubmit={handleSubmit} />
      <div className="row g-3 mt-5">
        <div className="col">
          {isLoading && <div className="alert alert-info">loading.....</div>}
          {!error && <Pending list={pending} handleStatus={handleStatus} />}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <div className="col">
          <Completed list={completed} />
        </div>
      </div>
    </>
  );
}

export default Task;
