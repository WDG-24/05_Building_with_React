import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext.jsx';
import { TodoReducerContext } from '../contexts/ToDoReducerContext.jsx';

const ToDoItem = ({ todo }) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useContext(TodoReducerContext);

  return (
    <li className='flex items-center mb-2'>
      <label>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} className='mr-2' />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
