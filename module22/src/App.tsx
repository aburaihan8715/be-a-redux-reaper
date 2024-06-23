import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <TodoProvider>
      {/* <UserInfoWithUseState /> */}
      {/* <UserInfoWithUseReducer /> */}
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
