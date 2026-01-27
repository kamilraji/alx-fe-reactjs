import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
})

export const searchUsers = async (searchTerm) => {
  const response = await api.get("", {
    params: {
      q: searchTerm,
    },
  })

  return response.data.items
}

