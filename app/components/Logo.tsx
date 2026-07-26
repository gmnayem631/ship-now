const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
        <path d="M6 8L16 4L26 8V16L16 28L6 16V8Z" fill="white" />
        <path d="M16 4L26 8V16L16 12V4Z" fill="#E9D5FF" />
      </svg>
      <span className="text-xl font-bold text-white tracking-tight">
        SHIPNOW
      </span>
    </div>
  );
};

export default Logo;
