import { createContext, useReducer } from 'react';

export const TodoReducerContext = createContext();

const initialState = {
  todos: [],
  filter: 'all', // "all", "completed", "active"
};

// Reducer-Funktion: definiert wie State basierend auf Actions verändert wird
function reduce(state, action) {
  switch (action.type) {
    case 'add_todo': {
      // {} für eigenen scope
      const newTodo = { id: Date.now(), text: action.payload, completed: false };
      const todos = [newTodo, ...state.todos];
      return { ...state, todos }; // alle returns müssen eine neue Kopie eines vollständigen state-Objekts zurückgeben (immutable pattern)
    }
    case 'filter_todo': {
      const filter = action.payload; // "all", "completed", "active"
      return { ...state, filter: filter };
    }
    case 'toggle_todo': {
      const todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos };
    }
    default:
      throw new Error('Unknown action', action.type); // Error für uns als Entwickler gedacht
  }
}

export default function TodoReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reduce, initialState);

  // Action Creator Funktionen - kapseln dispatch-Aufrufe
  function addTodo(text) {
    dispatch({ type: 'add_todo', payload: text });
  }
  function setFilter(filter) {
    dispatch({ type: 'filter_todo', payload: filter });
  }
  function toggleTodo(id) {
    dispatch({ type: 'toggle_todo', payload: id });
  }

  return (
    <TodoReducerContext value={{ todos: state.todos, filter: state.filter, addTodo, setFilter, toggleTodo }}>
      {children}
    </TodoReducerContext>
  );
}
