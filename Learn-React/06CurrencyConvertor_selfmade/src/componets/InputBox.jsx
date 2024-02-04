import React from "react";

function InputBox(label, px, disabled) {
  return (
    <div className="p-8">
      <label
        for={label}
        className="text-2xl font-semibold bg-red-400 rounded-3xl py-1.5 px-4 m-3 border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black shadow-2xl align-middle"
        style={{ px }}
      >
        {label}
      </label>
      <input
        type="text"
        name={label}
        id=""
        className="p-4 h-15 rounded-2xl border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black"
        disabled={disabled}
      />
      <select
        name={label}
        id={label}
        className="p-2 mx-5 h-15 rounded-2xl w-20 border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black"
      ></select>
    </div>
  );
}

export default InputBox;
