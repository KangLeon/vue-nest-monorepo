<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 18:09:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 13:09:40
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/views/users/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-table class="w-full" :columns="userColumns" :data="lists">
        <template #optional="{ record }">
            <a-button @click="$modal.info({ title: 'Name', content: record.name })">view</a-button>
        </template>
    </a-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import axios from "@/utils/axios";
import { Profile, UserItem, RoleItem } from "./User";
import { userColumns, transformData } from "./utils";

export default defineComponent({
    setup() {
        const lists = ref([] as UserItem[])

        const formValue = reactive({
            username: '',
            profile: {
                gender: 0,
                address: "",
                photo: "",
            } as Profile,
            role: [] as RoleItem[]
        } as UserItem)

        onMounted(async () => {
            const res = await axios.get("/user/getUsers") as []
            if (res && res.length > 0) {
                const resultData = transformData(res)
                console.log("🚀 ~ onMounted ~ resultData:", resultData)
                lists.value = resultData;
                lists.value = resultData
            }
        })
        return {
            lists,
            userColumns,
            formValue,
        }
    }
})
</script>