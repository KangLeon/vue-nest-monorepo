<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:28:25
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 19:22:53
 * @FilePath: /project/src/views/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class=" bg-blue-200 w-screen h-screen flex flex-col justify-center items-center">
        <h1>登录到系统</h1>
        <div class=" p-6 shadow-2xl bg-white rounded-lg">
            <a-form :model="form" :style="{ width: '400px'}" @submit="handleSubmit">
                <a-form-item field="username" tooltip="Please enter username" label="用户名">
                    <a-input v-model="form.username" placeholder="请输入您的用户名..."
                        :rules="[{ required: true, message: 'username is required' }, { type: 'string', max: 100, message: 'username is max than 100' }]"
                        :validate-trigger="['change', 'input']" />
                </a-form-item>
                <a-form-item field="password" tooltip="Please enter password" label="密码 ">
                    <a-input v-model="form.password" placeholder="请输入您的密码..."
                        :rules="[{ required: true, message: 'password is required' }, { type: 'string', max: 100, message: 'password is max than 100' }]"
                        :validate-trigger="['change', 'input']" />
                </a-form-item>
                <a-form-item field="isRead">
                    <a-checkbox v-model="form.isRead"> 登录即表示同意隐私协议 </a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-button class=" rounded-sm w-24" html-type="submit">登录</a-button>
                    <RouterLink to="/reg">
                        <a-button class="ml-10 rounded-sm w-24" html-type="submit">注册</a-button>
                    </RouterLink>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { signin } from "@/api/login";
import { useUserStore } from '@/store/user';

interface LoginResponse { 
    access_token: string
}

export default defineComponent({
    setup() {
        const router = useRouter()
        const store = useUserStore()
        
        const form = reactive({
            username: '',
            password: '',
            isRead: false,
        })
        const handleSubmit = async (data: any) => {
            console.log(data)

            const { username, password } = form

            const res = await signin(username, password) as unknown as LoginResponse

            if (res.access_token) {
                store.$patch({
                    token: res.access_token,
                })
            }
            console.log("🚀 ~ handleSubmit ~ res:", res)

            router.push('/home')
        }

        return {
            form,
            handleSubmit,
        };

    }
})
</script>