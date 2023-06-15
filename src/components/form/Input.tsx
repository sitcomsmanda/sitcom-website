import { HTMLInputTypeAttribute } from "react";

type inputType = {
  children?: React.ReactNode;
  type: HTMLInputTypeAttribute;
};

export default function Input({ children, type }: inputType) {
  return (
    <label htmlFor="test" className="relative text-base">
      <input
        type={type}
        id="test"
        name="test"
        className="peer/input bg-slate-200 w-fit border-b-2 border-slate-900 rounded px-2 pt-5 pb-1 focus:outline-none"
      >
        {children}
      </input>
      <span className="transition-all duration-150 ease-out block absolute pointer-events-none select-none top-2 left-2 text-slate-900 font-medium peer-focus/input:text-xs peer-focus/input:top-1">
        Test
      </span>
    </label>
  );
}
