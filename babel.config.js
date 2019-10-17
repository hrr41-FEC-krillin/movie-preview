module.exports = {
  presets: [
    "@babel/preset-env",
    //removed outer array
    // {
    //   targets: {
    //     node: "current"
    //   }
    // },
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-transform-runtime"]
};
