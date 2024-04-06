<template>
    <div class="flex flex-row ">
        <a-menu-item v-for="item in breadcrumbItems" :key="item.key">
            <template v-if="item.isLink">
                <router-link :to="item.path" class="hover:bg-gray-200 p-2 font-semibold text-blue-500">{{
                    item.title }}</router-link>
            </template>
            <template v-else >
                <span class="p-2">/</span>
                <span class="p-2 font-semibold">{{ item.title }}</span>
            </template>
        </a-menu-item>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import { breadcrumbNameMap } from "@/router/index";

export default defineComponent({
    setup() {
        const route = useRoute()

        const breadcrumbItems = computed(() => {
            const path = route.fullPath;
            const pathSnippets = path.split('/').filter((i) => i);
            return pathSnippets.map((item, index) => {
                const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
                return {
                    key: url,
                    label: item,
                    path: item,
                    breadcrumbName: item,
                    title: breadcrumbNameMap[url],
                    isLink: index !== pathSnippets.length - 1,
                };
            });
        });

        return {
            breadcrumbItems,
        }
    }
})
</script>
