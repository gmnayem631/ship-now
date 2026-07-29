interface FormSelectProps {
  label: string;
  name: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const FormSelect = ({
  label,
  name,
  value,
  error,
  onChange,
  children,
}: FormSelectProps) => {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#757575]">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`h-11 w-full rounded-lg border bg-[#F5F5F5] px-3 text-sm text-[#333] outline-none focus:ring-2 ${
          error
            ? "border-[#2A1298] focus:border-[#2A1298] focus:ring-[#2A1298]/20"
            : "border-gray-200 focus:border-[#856DF3] focus:ring-[#856DF3]/20"
        }`}
      >
        {children}
      </select>
      {error && <p className="mt-1.5 text-sm text-[#2A1298]">{error}</p>}
    </div>
  );
};

export default FormSelect;
