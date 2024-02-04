import React from "react";

function SubmitButton(label) {
  return (
    <div className="items-center flex align-middle justify-center rounded-3xl">
      <button
        type="button"
        className="items-center flex align-middle justify-center p-4 bg-green-600 w-120 rounded-3xl border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black font-extrabold text-gray-300 text-3xl shadow-2xl"
      >
        {label}
      </button>
    </div>
  );
}

export default SubmitButton;
