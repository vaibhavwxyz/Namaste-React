import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="text-center my-20">
        <h1 className="font-semibold text-xl">Oops! something went wrong..</h1>
        <h1>{err.data}</h1>
        <h3>{err.status + ": " + err.statusText}</h3>
      </div>
    </>
  );
};

export default Error;
