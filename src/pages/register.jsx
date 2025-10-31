import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Regsiter" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
