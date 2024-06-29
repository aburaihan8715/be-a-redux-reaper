/* eslint-disable @typescript-eslint/no-explicit-any */
import TodoCard from './TodoCard';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';
import { useState } from 'react';

function TodoContainer() {
  const [priority, setPriority] = useState('');
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="">
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="w-full h-full p-1 space-y-3 rounded-xl bg-primary-gradient">
        <div className="p-3 space-y-3 bg-white rounded-md">
          {todos && todos.data.length > 0 ? (
            todos.data.map((item: any) => <TodoCard key={item._id} {...item} />)
          ) : (
            <div className="flex items-center justify-center p-3 font-bold bg-white rounded-md">
              <p> There is not task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
