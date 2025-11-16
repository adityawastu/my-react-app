import { useLogin } from "../hooks/useLogin";

const ProfilPage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>halaman profile</h1>
      <h1>Halo {username}</h1>
    </div>
  );
};

export default ProfilPage;
