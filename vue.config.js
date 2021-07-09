let buildTime = new Date()
module.exports = {
    publicPath: './',
    assetsDir: "static",
    productionSourceMap: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].buildTime = buildTime
                return args
            })
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'store': '@/store',
                'plugins': '@/plugins',
            }
        }
    },

    //跨域
    devServer: {                //记住，别写错了devServer
        host: 'localhost',        //设置本地服务器   选填
        port: 8080,				//设置本地默认端口  选填
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost/api/',     //代理的目标地址，这是豆瓣接口地址网址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '/api': ''                     //选择忽略拦截器里面的单词
                }
            }
        }
    }
}
