import axios from 'axios'

const API_URL = 'https://api.github.com/search/users'

export const searchUsers = async (query) => {
  if (!query) return []

  const response = await axios.get(API_URL, {
    params: { q: query },
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined
    }
  })

  return response.data.items
}

