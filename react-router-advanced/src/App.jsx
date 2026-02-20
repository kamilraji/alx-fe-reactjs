import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  Navigate,
} from "react-router-dom";

import Profile from "./components/Profile";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Post() {
  const { id } = useParams();
  return <h2>Post ID: {id}</h2>;
}

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
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
  <Route path="details" element={<h3>Profile Details</h3>} />
  <Route path="settings" element={<h3>Profile Settings</h3>} />
</Route>
    </BrowserRouter>
  );
}

export default App;
