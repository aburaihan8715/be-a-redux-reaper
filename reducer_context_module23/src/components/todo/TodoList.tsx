import { useContext } from 'react';
import { TodoContext } from '../../context/TodoProvider';

function TodoList() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {state.map((item) => (
        <li
          onClick={() => dispatch({ type: 'taskCompleted', payload: item.id })}
          className={`cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
