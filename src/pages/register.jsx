import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Regsiter">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
