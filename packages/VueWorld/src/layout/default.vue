<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 18:09:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 00:39:57
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/layout/default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 14:06:17
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-05 04:34:27
 * @FilePath: /project/src/layout/default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class=" bg-slate-400">
            <TopNavBar></TopNavBar>
        </div>
        <a-row class="flex flex-row ml-6 mt-6 w-full">
            <SiderBarNav :menus="store.menus"></SiderBarNav>
            <div class="w-ful flex flex-col py-6">
                <BreadCrumb class="mb-6"></BreadCrumb>
                <RouterView></RouterView>
            </div>
        </a-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiderBarNav from '@/components/sidebarNav/SiderBarNav.vue'
import TopNavBar from '@/components/navbar/TopNavBar.vue'
import BreadCrumb from "@/components/breadCrumb/BreadCrumb.vue";
import { userMenuStore } from '@/store/menus'

export default defineComponent({
    components: {
        SiderBarNav,
        TopNavBar,
        BreadCrumb,
    },
    setup() {
        const store = userMenuStore()
        return {
            store
        }
    }
})
</script>