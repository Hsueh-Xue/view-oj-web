module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
            }
        }
    },

    //跨域
    devServer: {                //记住，别写错了devServer
        host: 'localhost',        //设置本地服务器   选填
        port: 8080,				//设置本地默认端口  选填
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost:80/api',     //代理的目标地址，这是豆瓣接口地址网址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '/api': ''                     //选择忽略拦截器里面的单词
                }
            }
        }
    }
}