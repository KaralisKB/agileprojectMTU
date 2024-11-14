import axios from 'axios';

const api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_ENV === 'development'
      ? import.meta.env.VITE_REACT_APP_API
      : 'https://apibookfair.danielefarriciello.dev/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ...(import.meta.env.VITE_REACT_APP_ENV === 'development' && {
      'User-email': import.meta.env.VITE_REACT_APP_EMAIL,
    }),
  },
  withCredentials: true,
});

export default api;