const initState = {
  todos: [],
  currentTodo: "",
};

export const updateCurrent = (payload) => ({ type: "CURRENT_UPDATE", payload });
export const addTodo = (payload) => ({ type: "ADD_TODO", payload });

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const nextId =
        state.todos.length !== 0
          ? state.todos[state.todos.length - 1].id + 1
          : 1;

      return {
        ...state,
        todos: [...state.todos, { id: nextId, ...action.payload }],
        currentTodo: "",
      };
    case "CURRENT_UPDATE":
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
