interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: FormInputProps) => {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#757575]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-11 w-full rounded-lg border bg-[#F5F5F5] px-3 text-sm text-[#333] outline-none focus:ring-2 ${
          error
            ? "border-[#2A1298] focus:border-[#2A1298] focus:ring-[#2A1298]/20"
            : "border-gray-200 focus:border-[#856DF3] focus:ring-[#856DF3]/20"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-[#2A1298]">{error}</p>}
    </div>
  );
};

export default FormInput;
