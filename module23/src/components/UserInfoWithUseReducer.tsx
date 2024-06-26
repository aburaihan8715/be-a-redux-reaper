import { FormEvent, useReducer } from 'react';

type TUserInfo = {
  name: string;
  age: string;
  hobbies: string[];
};
type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: '',
  age: '',
  hobbies: [],
};

const reducer = (state: TUserInfo, action: TAction) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.payload };
    case 'addAge':
      return { ...state, age: action.payload };
    case 'addHobby':
      return { ...state, hobbies: [...state.hobbies, action.payload] };

    default:
      return state;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-10 space-x-2">
      <input
        onChange={(e) => {
          dispatch({ type: 'addName', payload: e.target.value });
        }}
        className="outline-0 border border-gray-500 p-2 "
        type="text"
        placeholder="Enter name"
        name="name"
      />
      <input
        onChange={(e) => {
          dispatch({ type: 'addAge', payload: e.target.value });
        }}
        className="outline-0 border border-gray-500 p-2 "
        type="number"
        placeholder="Enter age"
        name="age"
      />
      <input
        onBlur={(e) => {
          dispatch({ type: 'addHobby', payload: e.target.value });
        }}
        className="outline-0 border border-gray-500 p-2 "
        type="text"
        placeholder="Enter hobbies"
        name="hobbies"
      />
      <button className="px-3 py-1 border bg-green-700" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseReducer;
