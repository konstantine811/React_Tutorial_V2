import { useState } from "react";
import { Button } from "@material-tailwind/react";
import WithMemo from "./partials/WithMemo";
import Simple from "./partials/Simple";

let count = 0;
const Memoization = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  count++;
  return (
    <div className="shadow-blue-gray-600 shadow-md rounded-md m-5 p-5">
      <p className="text-xl">Rerender perent count is : {count}</p>
      <Button className="mr-4" onClick={() => setCounter(counter + 1)}>
        Reduce child
      </Button>
      <Button onClick={() => setCounter1(counter1 + 1)}>
        Reduce this {counter1}
      </Button>
      <div className="flex gap-3 m-2">
        <div className="shadow-blue-gray-600 shadow-md rounded-md p-5 ">
          <WithMemo parentCount={counter} />
        </div>
        <div className="shadow-blue-gray-600 shadow-md rounded-md p-5 ">
          <Simple parentCount={counter} />
        </div>
      </div>
    </div>
  );
};

export default Memoization;
