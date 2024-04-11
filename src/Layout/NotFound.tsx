import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h2>{`${error.status} ${error.statusText}`}</h2>
        <p>{error.data}</p>
        <Link to="/">Home</Link>
      </>
    );
  }
  return <div>Oops</div>;
}

export default NotFound;
