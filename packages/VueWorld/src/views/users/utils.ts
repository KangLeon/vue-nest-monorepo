/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-06 14:56:06
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 01:01:48
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/views/users/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RoleItem, UserItem } from "./User";

export const userColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'username',
    },
    {
        title: '性别',
        dataIndex: 'profile.gender',
    },
    {
        title: '角色',
        dataIndex: 'profile.role',
        render(data: any) {
        console.log("🚀 ~ render ~ data:", data.record.role)
        
        return data.record.role.map((item: RoleItem) => { 
            return  item.name
        })
    },
    },
    {
        title: '头像',
        dataIndex: 'profile.photo',
    },
    {
        title: '地址',
        dataIndex: 'profile.address',
    },
    {
        title: '操作',
        slotName: 'optional',
    },
]

export function transformData(res: []): UserItem[] {
    const resultData: UserItem[] = []
    const temList = [...res]
    temList.forEach((element: any) => {
        resultData.push({
            id: element.id,
            key: element.id,
            username: element.id,
            profile: element.profile,
            role: element.roles
        })
    })
    return resultData
}