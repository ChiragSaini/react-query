/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  devOptions: {
    port: 3000,
    src: 'src',
    bundle: false,
    fallback: 'index.html',
  },
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: '/',
    src: '/dist'
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  plugins: [["@snowpack/plugin-webpack"]]
};
