/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:13:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 16:48:14
 * @FilePath: /project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './global.css';
import { setupStore } from './store';

function pageConstructor() { 
    const app = createApp(App)

    //配置store
    setupStore(app)

    //配置router
    setupRouter(app)

    app.mount('#app')
}

pageConstructor()
