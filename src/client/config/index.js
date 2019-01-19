const env = process.env.NODE_ENV;

export default {
  api: env === 'production' ? '//api/' : '//localhost:3001/api/',
};
