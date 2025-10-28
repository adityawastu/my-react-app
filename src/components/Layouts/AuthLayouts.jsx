const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs ">
      <h1 className="text-blue-500 text-2xl font-bold">{title}</h1>
      <p className="font-medium text-slate-500 mb-8"> Welcome, please enter your detail</p>
      {children}
    </div>
  );
};

export default AuthLayout;
