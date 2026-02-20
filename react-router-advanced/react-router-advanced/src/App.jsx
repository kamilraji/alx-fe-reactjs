import { Routes, Route, Link, Outlet, useParams, Navigate } from "react-router-dom";


/* -------- Basic Pages -------- */
function Home() {
  return <h2>Home Page</h2>;
}

function Post() {
  const { id } = useParams();

  return <h2>Post ID: {id}</h2>;
}



function About() {
  return <h2>About Page</h2>;
}

/* -------- Nested Profile Pages -------- */
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

function ProfileDetails() {
  return <h3>Profile Details</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings</h3>;
}

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}


/* -------- App -------- */
function App() {

const isAuthenticated = true; // change to true to simulate login

  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Route
  path="/profile"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>
    </>
  );
}

export default App;
