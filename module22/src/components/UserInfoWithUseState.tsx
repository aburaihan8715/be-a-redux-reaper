import { FormEvent, useState } from "react";

type TUserInfo = {
  name: string;
  age: string;
  hobbies: string[];
};

const UserInfoWithUseState = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo>({
    name: "",
    age: "",
    hobbies: [],
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-10 space-x-2">
      <input
        onChange={(e) => {
          setUserInfo({ ...userInfo, name: e.target.value });
        }}
        className="outline-0 border border-gray-500 p-2 "
        type="text"
        placeholder="Enter name"
        name="name"
      />
      <input
        onChange={(e) => {
          setUserInfo({ ...userInfo, age: e.target.value });
        }}
        className="outline-0 border border-gray-500 p-2 "
        type="number"
        placeholder="Enter age"
        name="age"
      />
      <input
        onBlur={(e) => {
          setUserInfo({ ...userInfo, hobbies: [...userInfo.hobbies, e.target.value] });
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

export default UserInfoWithUseState;
