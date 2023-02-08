import axios from 'axios';

export default {
  install: (app, options) => {
    const http = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });

    app.config.globalProperties.$axios = http;
  },
};
