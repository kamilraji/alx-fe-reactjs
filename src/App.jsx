import { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await searchUsers(searchTerm);
    setUsers(results);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

