import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>ERROR {error.status}</h1>
      <h3>Página no encontrada</h3>
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
