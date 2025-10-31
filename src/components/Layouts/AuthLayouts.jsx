import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs ">
        <h1 className="text-blue-500 text-2xl font-bold">{title}</h1>
        <p className="font-medium text-slate-500 mb-8"> Welcome, please enter your detail</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;

  if (type === "login") {
    return (
      <p className="mt-5 text-center">
        Tidak Punya Akun?{" "}
        <Link to="/register" className="font-semibold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-center">
        Sudah Punya Akun?{" "}
        <Link to="/login" className="font-semibold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
