import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;
    event.preventDefault();
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
    window.location.href = "/produk";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="Passsword"></InputForm>
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
