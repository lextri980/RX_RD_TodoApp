import React, { useState } from "react";
import "../assets/css/todo.css";
import { v1 as uuid } from "uuid";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function TodoInput() {
  let [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <h3>TodoInput</h3>
      <div className="row">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          className="add-btn"
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
