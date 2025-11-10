import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/produk";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="john doe" ref={usernameRef} />
      <InputForm label="Password" name="password" type="password" placeholder="Passsword" />
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
