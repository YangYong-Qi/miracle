<template>
    <div class="menu-tree">
        <label v-for="item in dataList" :key="item.id">
            <el-submenu
                :index="item.path"
                v-if="item.children && item.children.length > 1"
            >
                <template slot="title">
                    <div class="menu-tree-item">
                        <i :class="['iconfont', item.meta.icon]"></i>
                        <span class="menu-tree-title">{{
                            item.meta.title
                        }}</span>
                    </div>
                </template>
                <label>
                    <menu-item :dataList="item.children"></menu-item>
                </label>
            </el-submenu>
            <el-menu-item
                v-else
                :index="
                    item.children && item.children.length == 1
                        ? item.children[0].name
                        : item.name
                "
                @click="handleToPage(item)"
            >
                <div class="menu-tree-item">
                    <i
                        :class="['iconfont', item.meta.icon]"
                        v-if="item.children && item.children.length == 1"
                    ></i>
                    <span class="menu-tree-title" slot="title"
                        >{{ item.meta.title }}
                    </span>
                </div>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
export default {
    name: 'menuItem',
    props: ['dataList'],
    methods: {
        handleToPage(data) {
            this.$router.push({
                name: data.name
            })
        }
    }
}
</script>
<style lang="less" scoped>
.menu-tree-item {
    margin-left: 10px;
    i {
        font-size: 14px;
    }
}
.menu-tree-title {
    margin-left: 10px;
}
</style>
