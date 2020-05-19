import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { updateCurrent, addTodo } from "../reducers/todo";

const TodoForm = ({ updateCurrent, currentTodo, addTodo }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo({ name: currentTodo, isCompleted: false });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={currentTodo}
        onChange={({ target: { value } }) => updateCurrent(value)}
      />
    </form>
  );
};

export default connect((state) => state, { updateCurrent, addTodo })(TodoForm);
