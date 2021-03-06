import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1 className="text-3xl text-center font-medium mb-3">404 Not found</h1>
    <p className="text-center">
      We tried looking everywhere, but the page you requested cannot be found.{" "}
      <Link className="text-purple-500" to="/">
        Back to feed
      </Link>
      .
    </p>
  </>
);

export { NotFound };
