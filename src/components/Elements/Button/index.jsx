const Button = (props) => {
  const { children = "Default", classname = "bg-blue-800" } = props;
  return (
    <button className={`${classname} px-6 py-2 rounded-xl hover:bg-blue-800 text-white`} type="submit">
      {children}
    </button>
  );
};

export default Button;
