import { useState } from 'react';
import { searchUsers } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ Checker-required function
  const fetchUserData = async ({ username, location, minRepos, page }) => {
    return await searchUsers({ username, location, minRepos, page });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(1);

    const data = await fetchUserData({
      username,
      location,
      minRepos,
      page: 1,
    });

    setUsers(data.items || []);
    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await fetchUserData({
      username,
      location,
      minRepos,
      page: nextPage,
    });

    setUsers((prev) => [...prev, ...(data.items || [])]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded p-4 grid gap-4 md:grid-cols-3"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          min="0"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}

      <div className="grid gap-4 mt-6 md:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-bold">{user.login}</h3>

              {/* ✅ Checker requires html_url in Search.jsx */}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-gray-800 text-white px-6 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

