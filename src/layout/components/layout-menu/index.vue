<template>
    <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.name"
        :unique-opened="true"
        :collapse="isCollapse"
        background-color="#191a23"
        text-color="hsla(0,0%,100%,.65)"
        active-text-color="#ffffff"
    >
        <menu-item :dataList="permissionList"></menu-item>
    </el-menu>
</template>

<script>
import menuItem from './menuItem'
import { mapGetters } from 'vuex'

export default {
    name: 'LayoutMmenu',

    data() {
        return {}
    },
    components: {
        menuItem
    },
    computed: {
        ...mapGetters(['permissionList', 'isCollapse'])
    }
}
</script>
