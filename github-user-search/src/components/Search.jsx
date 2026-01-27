import { useState } from "react"
import { fetchUserData } from "../services/githubService"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setError("")
    setUser(null)
    setLoading(true)

    try {
      const data = await fetchUserData(username)
      setUser(data)
    } catch (err) {
      setError("Looks like we cant find the user")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  )
}

export default Search

