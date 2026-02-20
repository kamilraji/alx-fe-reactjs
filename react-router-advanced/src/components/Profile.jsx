import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <h2>Profile Page</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Profile;
