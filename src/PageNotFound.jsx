import { NavLink } from "react-router";

export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page not found</h1>
      <div>
        <NavLink to="/">Go to HomePage</NavLink>
      </div>
      <img
        src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"
        alt="Error 404 Page not found"
      />
    </div>
  );
}
