import { useEffect, useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const handleSubmit = () => {
    inputElement.current.style.padding = "200px";
  };

  // const handleSubmit = () => {
  //   const element = document.querySelector(".search");
  //   console.log(element);
  //   element.style.padding = "50px";
  //   element.focus();
  // };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  // useEffect(() => {
  //   inputElement.current.focus();
  //   inputElement.current.style.padding = "50px";
  // }, []);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input type="text" className="search" ref={inputElement} />
        <button>Click</button>
      </form>
    </div>
  );
}

export default App;
