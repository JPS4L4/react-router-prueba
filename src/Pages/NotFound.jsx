import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>NotFound 404</h1>
      <Link to="/" className="btn btn-secondary">
        Volver al inicio
      </Link>
    </>
  );
};

export default NotFound;
