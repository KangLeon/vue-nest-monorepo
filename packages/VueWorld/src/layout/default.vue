<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 14:06:17
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 17:07:53
 * @FilePath: /project/src/layout/default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class=" bg-slate-400">
            <TopNavBar></TopNavBar>
        </div>
        <a-row>
            <a-col :span="8">
                <SiderBarNav :menus="store.menus"></SiderBarNav>
            </a-col>
            <div :span="16">
                <RouterView></RouterView>
            </div>
        </a-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiderBarNav from '@/components/sidebarNav/SiderBarNav.vue'
import TopNavBar from '@/components/navbar/TopNavBar.vue'
import { userMenuStore } from '@/store/menus'

export default defineComponent({
    components: {
        SiderBarNav,
        TopNavBar,
    },
    setup() {
        const store = userMenuStore()
        return {
            store
        }
    }
})
</script>