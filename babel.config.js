module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    ["@vue/babel-plugin-jsx"],
    ["@babel/plugin-transform-modules-commonjs"],
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}