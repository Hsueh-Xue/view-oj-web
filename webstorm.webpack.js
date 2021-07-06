'use strict'
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve('src'),
            'components': path.resolve('src/components'),
            'assets': path.resolve(__dirname, 'src/assets'),
            '~assets': path.resolve(__dirname, 'src/assets'),
            'network': path.resolve(__dirname, 'src/network'),
            'views': path.resolve(__dirname, 'src/views'),
            'store': path.resolve(__dirname, 'src/store'),
            'utils': path.resolve(__dirname, 'src/utils'),
            'plugins': path.resolve(__dirname, 'src/plugins'),
        }
    }
}

