module.exports = {
    chainWebpack: () => {},
    configureWebpack: () => {},
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://192.168.1.155:81',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
