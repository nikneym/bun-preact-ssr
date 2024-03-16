import render from "preact-render-to-string";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

function Foo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count changed!");
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <br />
      <button type="button" onClick={() => setCount((prev) => (prev += 1))}>
        increment
      </button>
      <button
        type="button"
        onClick={() => setCount((prev) => Math.max((prev -= 1), 0))}
      >
        decrement
      </button>
    </div>
  );
}

export default function App() {
  return <Foo />;
}
