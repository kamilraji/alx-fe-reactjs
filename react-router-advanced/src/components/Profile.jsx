import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <h3>Profile Details</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings</h3>;
}

function Profile() {
  return (
    <>
      <h2>Profile Page</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default Profile;
