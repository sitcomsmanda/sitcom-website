import { HTMLInputTypeAttribute } from "react";

type inputType = {
  children?: React.ReactNode;
  type: HTMLInputTypeAttribute;
  label: string;
  id: string;
  name: string;
};

export default function TextField({
  children,
  type,
  label,
  id,
  name,
}: inputType) {
  return (
    <div className="text-base flex flex-col gap-1 w-full lg:gap-2 lg:text-lg">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className="transition-all duration-250 bg-slate-100 w-full border border-slate-400 rounded px-2 py-1 focus:outline-none focus:border-green-400 focus:bg-green-100 hover:border-slate-800 lg:px-4 lg:py-2"
      >
        {children}
      </input>
    </div>
  );
}
