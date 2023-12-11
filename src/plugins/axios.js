import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2VlM2ZlOWZiOWVjODBjMGU4ZGMzOTA3ODY5MzRlOSIsInN1YiI6IjY0ZmYxNTdmZTBjYTdmMDBlYzhjNmM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ym4SgeQgijAp5EPevgnOxRK9UWpnaJhDQ9dPF4SYh3w`
  }
})

export default api