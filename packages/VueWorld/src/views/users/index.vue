<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 18:09:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-05 04:16:38
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/views/users/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        你好
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from "@/utils/axios";
import { UserItem } from "@/types/User";

export default defineComponent({
    setup () {
        const lists = ref([] as UserItem[])
        onMounted(async () => {
            const res = await axios.get("/user") as [UserItem]
            if (res && res.length > 0) {
                lists.value = res
            }
        })
        return {
            lists,
        }
    }
})
</script>

<style scoped>

</style>