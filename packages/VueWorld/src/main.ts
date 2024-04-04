/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:13:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-05 04:30:11
 * @FilePath: /project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import { setupRouter } from './router'
import './global.css';
import { setupStore } from './store';

function pageConstructor() { 
    const app = createApp(App)
    app.use(ArcoVue, {
        // 用于改变使用组件时的前缀名称
        componentPrefix: 'arco'
    });

    //配置store
    setupStore(app)

    //配置router
    setupRouter(app)

    app.mount('#app')
}

pageConstructor()
