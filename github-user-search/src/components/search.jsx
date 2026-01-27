import { useState } from "react"
import { searchUsers } from "../services/githubService"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!searchTerm) return

    setLoading(true)
    setError("")

    try {
      const results = await searchUsers(searchTerm)
      setUsers(results)
    } catch (err) {
      setError("Failed to fetch users")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search

