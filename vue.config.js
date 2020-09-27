module.exports = {
    chainWebpack: () => {},
    configureWebpack: () => {},
    devServer: {
        open: true,
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8880',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/static/mock'
                }
            }
        }
    }
}
