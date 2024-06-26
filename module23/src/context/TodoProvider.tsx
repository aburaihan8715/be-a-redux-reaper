import { ReactNode, createContext, useReducer } from 'react';

export const TodoContext = createContext<TContextValue>({} as TContextValue);

const typeConstants = {
  ADD_TODO: 'addTodo',
  TASK_COMPLETED: 'taskCompleted',
};

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAddTodoAction = {
  type: 'addTodo';
  payload: TTodo;
};

type TTaskCompletedAction = {
  type: 'taskCompleted';
  payload: string;
};

type TAction = TAddTodoAction | TTaskCompletedAction;

type TContextValue = {
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
};

const initialState: TTodo[] = [];

const reducer = (state: TTodo[], action: TAction): TTodo[] => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...state, action.payload as TTodo];
    case typeConstants.TASK_COMPLETED:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return state;
  }
};

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
