type textAreaType = {
  children?: React.ReactNode;
  label: string;
  id: string;
  name: string;
};

export default function TextArea({ children, label, id, name }: textAreaType) {
  return (
    <div className="text-base flex flex-col gap-1 w-full lg:gap-2 lg:text-lg">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        className="transition-all duration-250 bg-slate-100 w-full min-h-[150px] border border-slate-400 rounded px-2 py-1 focus:outline-none focus:border-green-400 focus:bg-green-100 hover:border-slate-800 lg:px-4 lg:py-2"
      >
        {children}
      </textarea>
    </div>
  );
}
