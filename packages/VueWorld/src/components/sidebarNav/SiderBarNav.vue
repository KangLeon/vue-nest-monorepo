<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 18:09:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-06 12:36:51
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/components/sidebarNav/SiderBarNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            show-collapse-button breakpoint="xl" @collapse="onCollapse">
            <a-menu-item v-for="item in menus" :key="item.id">
                <RouterLink :to="item.routeName ? {name: item.routeName} : item.path">
                    <div>{{ item.name }}</div>
                </RouterLink>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts">
import { Message } from '@arco-design/web-vue'
import { PropType, defineComponent } from 'vue'
import { MenuItem } from "@/types/SiderBarNav"

export default defineComponent({
    props: {
        menus: {
            type: Array as PropType<Array<MenuItem>>,
            default: () => [] as MenuItem[],
        }
    },

    setup () {
        return {
            onCollapse(_val: any, type: any) {
                const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
                Message.info({
                    content,
                    duration: 2000,
                });
            }
        }
    }
})
</script>