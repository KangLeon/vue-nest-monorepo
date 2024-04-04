<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 15:40:02
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 15:52:49
 * @FilePath: /project/src/components/navbar/TopNavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-menu mode="horizontal" :default-selected-keys="['1']">
            <!--头图-->
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                <div :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'pointer',
            marginRight: '80px'
        }" />
            </a-menu-item>
            <a-menu-item key="1">首页</a-menu-item>
            <a-menu-item key="2">解决方案</a-menu-item>
            <a-menu-item key="3">关于</a-menu-item>
            <a-menu-item key="4">Price</a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        
        return {}
    }
})
</script>

<style scoped>

</style>