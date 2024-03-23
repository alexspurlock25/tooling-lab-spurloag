const path = require(`path`);

module.exports = {
  entry: `./resources/scripts/index.js`,
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `dist`),
  },
  mode: `none`
};