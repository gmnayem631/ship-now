import React from "react";

const RememberCheckbox = () => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2.5">
        <input
          type="checkbox"
          defaultChecked
          className="h-4 w-4 rounded accent-[#856df3]"
        />
        <span className="text-sm text-[#757575]">Remember Me</span>
      </label>
      <button type="button" className="text-sm font-semibold text-[#856df3]">
        Forgot Password?
      </button>
    </div>
  );
};

export default RememberCheckbox;
