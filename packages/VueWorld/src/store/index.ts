/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:25:38
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 19:21:49
 * @FilePath: /project/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from "pinia"
import { App } from "vue"
//数据持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const store = createPinia();
store.use(piniaPluginPersistedstate)

export function setupStore(app: App<Element>) { 
    app.use(store);
}

export { store };