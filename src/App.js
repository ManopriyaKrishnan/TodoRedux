import { Provider } from "react-redux";
import Task from "./component";
import Login from "./component/login";
import store from "./redux/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Task />
      </Provider>
      {/* <Login /> */}
    </div>
  );
}

export default App;
