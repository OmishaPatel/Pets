import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/styledcomponents/Button.style";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Page doesn't exit</h1>
        <Button>
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default Error;
