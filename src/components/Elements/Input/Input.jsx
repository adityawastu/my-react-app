const input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-teal-500 rounded-xl w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default input;
