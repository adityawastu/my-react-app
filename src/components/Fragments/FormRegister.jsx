import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Email" name="email" type="email" placeholder="exmaple@email.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="Passsword"></InputForm>
      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormRegister;
