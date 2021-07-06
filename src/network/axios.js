import originAxios from 'axios'
import {ElMessage} from 'element-plus'

export default function axios(option) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例
        const instance = originAxios.create({
            // baseURL: 'http://virtual.hsueh.club/',
            // baseURL: 'http://plane.hsueh.club/',
            baseURL: 'api/',
            headers: {'Authorization': window.localStorage['Authorization']}
        });

        // 配置响应拦截
        instance.interceptors.response.use(response => {
            if (response.data.code === 0) {
                return response.data
            } else {
                //错误信息弹窗
                ElMessage.error(response.data.msg);
                reject();
            }
        }, err => {
            //失败跳转
            return err
        })

        // 2.传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
