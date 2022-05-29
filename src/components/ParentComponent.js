import { useState } from "react";
import { Title } from "./Title";
import { Count } from "./Count";
import { Button } from "./Button";

export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge((prev) => prev + 1);
  };

  const incrementSalary = () => {
    setSalary((prev) => prev + 1000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
