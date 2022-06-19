import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <section>
        <Link to="/student">Go to the Student page</Link>
        <br />
        <Link to="/staff">Go to the Staff page</Link>
        <br />
        <Link to="/login">Go to the Login page</Link>
      </section>
    </div>
  );
};
