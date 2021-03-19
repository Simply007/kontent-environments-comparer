module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NETLIFY === "true" ? "/" : "/kontent-environments-comparer/"
};
