import React from "react";
import usestate from "usestate";

const About = ({ a, b }) => {
  console.log("About Render");

  let [count, setCount] = React.useState(0);
  let res = React.useMemo(() => {
    return a + b;
  }, [a, b]);

  return (
    <div>
      <h1>About {res}</h1>

      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default React.memo(About);
