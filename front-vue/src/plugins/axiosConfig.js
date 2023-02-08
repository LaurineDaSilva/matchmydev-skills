import axios from 'axios';

export default {
  install: (app, options) => {
    const http = axios.create({
      baseURL: 'http://localhost:8080',
    });

    app.config.globalProperties.$axios = http;
  },
};
