import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
