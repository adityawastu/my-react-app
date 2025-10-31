import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Nama" name="name" type="name" placeholder="Masukkan nama"></InputForm>
      <InputForm label="Email" name="email" type="email" placeholder="exmaple@email.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="Passsword"></InputForm>
      <InputForm label="Confirm Password" name="rePassword" type="password" placeholder="Password"></InputForm>
      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
