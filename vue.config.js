module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.20.199:8000',
        ws: true,
        changeOrigin: true
      },
      // '/user': {
      //   target: 'http://192.168.20.199:8000',
      //   ws: true,
      //   changeOrigin: true
      // }
    }
  }
}
