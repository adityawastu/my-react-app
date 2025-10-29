import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl mb-5">404 Not Found</h1>
      <h2 className="">Halaman yang kamu cari tidak ada</h2>
    </div>
  );
};

export default ErrorPage;
