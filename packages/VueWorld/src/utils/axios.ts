/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 10:01:33
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 17:50:40
 * @FilePath: /project/src/utils/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const instance = axios.create({
    baseURL: '/api/v1',
    timeout: 6000,
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(
    function (response: any) {
        if (response.status.toString().startsWith('2')) {
            return response.data
        }
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default instance
