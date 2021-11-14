const path = require('path');
const resolveSrc = (ph) => path.resolve(__dirname, `./src/${ph}`);

module.exports = {
  webpack: {
    alias: { '@router': resolveSrc('router'), '@pages': resolveSrc('pages'), '@services': resolveSrc('services') },
  },
};
