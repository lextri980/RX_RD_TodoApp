import React, { useState } from "react";
import "../assets/css/todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row todo-items">
        <div>#{todo.id}</div>
        {editable ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h4>{todo.name}</h4>
        )}

        <button
          className="edit-btn"
          onClick={() => {
            console.log('update');
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="del-btn"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
