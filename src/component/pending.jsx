import { useSelector } from "react-redux";

const Pending = ({ list, handleStatus }) => {
  const data = useSelector(list=>list)
  console.log(data)
  return (
    <ul class="list-group">
      {list.map((el) => (
        <li class="list-group-item" key={el.description}>
          {el.description}
          <button className="btn btn-sm btn-danger float-end ms-3">x</button>
          <button
            onClick={() => handleStatus(el)}
            className="btn btn-sm btn-success float-end"
          >
            Y
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pending;
