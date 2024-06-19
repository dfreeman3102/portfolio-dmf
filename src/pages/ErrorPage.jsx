import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { error } = useRouteError();
  console.error(error);
  return (
    <>
      <h1>Error Page</h1>
      <p>Sorry an Error Occurred!</p>
      <p>{error.message}</p>
    </>
  );
}
