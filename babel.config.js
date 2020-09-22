module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
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