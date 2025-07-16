import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);//update the count variable when the count button is cliked it will run an increament
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
