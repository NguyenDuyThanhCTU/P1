import React from "react";

const Input = ({ placeholder, setData }) => {
  return (
    <div>
      <input
        type="text"
        className="outline-none border rounded-md p-2 w-full"
        placeholder={placeholder}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
