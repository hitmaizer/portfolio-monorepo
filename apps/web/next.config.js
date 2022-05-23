const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
