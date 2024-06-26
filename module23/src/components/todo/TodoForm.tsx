import { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoProvider';

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState('');
  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: 'addTodo', payload: todo });
  };
  return (
    <div>
      <h1 className="text-2xl uppercase">Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-sm">
          <label htmlFor="todo">Task</label>
          <input
            onBlur={(e) => {
              setTask(e.target.value);
            }}
            className="border border-gray-500"
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter task"
          />
        </div>
        <div>
          <button className="px-3 py-2 bg-fuchsia-700" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
