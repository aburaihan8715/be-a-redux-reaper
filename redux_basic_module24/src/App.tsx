import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  const numberOfBox = Math.trunc(count / 5);
  const numberOfBoxArray = [...Array(numberOfBox)].map((_, i) => i);
  // console.log(numberOfBoxArray);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-10 space-x-4 border border-orange-600 rounded">
        <button className="px-3 py-2 text-white bg-green-500 rounded" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className="inline-block px-3 py-2 text-white bg-green-500 rounded">{count}</span>
        <button className="px-3 py-2 text-white bg-green-500 rounded" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        {/* <button className="px-3 py-2 text-white bg-green-500 rounded" onClick={() => dispatch(incrementByAmount(5))}>
          IncrementByAmount
        </button> */}
      </div>
      <div className="">{numberOfBoxArray.length > 0 && numberOfBoxArray.map((item) => <span key={item}>📦</span>)}</div>
    </div>
  );
};

export default App;
