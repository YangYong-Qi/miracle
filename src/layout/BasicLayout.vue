<template>
    <!-- 基本布局 -->
    <div class="basicLayout">
        <!-- 主体 -->
        <div class="container">
            <!-- 头部 -->
            <header :class="['header', { 'layout-min-header': isCollapse }]">
                <layout-header></layout-header>
            </header>
            <!-- 左侧 -->
            <div :class="['aside', { 'layout-min-aside': isCollapse }]">
                <layout-logo></layout-logo>
                <layout-menu></layout-menu>
            </div>
            <!-- 中心 -->
            <div :class="['main', { 'layout-min-main': isCollapse }]">
                <layout-tabs></layout-tabs>
                <div class="main-router">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutLogo from './components/layout-logo'
import LayoutMenu from './components/layout-menu'
import LayoutHeader from './components/layout-header'
import LayoutTabs from './components/layout-tabs'

export default {
    name: 'BasicLayout',
    components: {
        LayoutLogo,
        LayoutHeader,
        LayoutMenu,
        LayoutTabs
    },
    computed: {
        ...mapGetters(['isCollapse'])
    },
    methods: {
        handleToPage() {
            this.$refs.menuItem.init()
        }
    }
}
</script>

<style lang="less">
@import url('./BasicLayout.less');
</style>
