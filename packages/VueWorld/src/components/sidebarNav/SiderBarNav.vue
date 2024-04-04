<template>
    <div>
        <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            show-collapse-button breakpoint="xl" @collapse="onCollapse">
            <a-menu-item v-for="item in menus" :key="item.id">
                <RouterLink :to="item.routeName ? {name: item.routeName} : item.path">
                    {{item.name}}
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

<style scoped>

</style>