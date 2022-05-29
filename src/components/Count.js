import React from "react";

export const Count = ({ text, count }) => {
  console.log(`Rendering`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};
