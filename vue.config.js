module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://dtzw.host/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
    }
}