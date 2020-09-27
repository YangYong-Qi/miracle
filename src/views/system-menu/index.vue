<template>
    <div>
        <div class="table-top">
            <el-row>
                <el-col :span="12">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="2">
                            <el-button
                                class="table-top-item"
                                size="small"
                                plain
                                @click="handleAddMenu"
                                >新 建</el-button
                            >
                        </el-col>
                        <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="2">
                            <el-button class="table-top-item" size="small" plain
                                >删 除</el-button
                            >
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="9" :lg="6" :xl="5">
                            <el-input
                                class="table-top-item"
                                size="small"
                                placeholder="请输入内容"
                            ></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <global-table>
            <el-table-column
                type="selection"
                align="center"
                width="55"
            ></el-table-column>

            <el-table-column
                prop="title"
                label="菜单名称"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="icon"
                label="菜单图标"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="component"
                label="菜单组件"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="keepAlive"
                label="是否缓存"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="name"
                label="路由名称"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="path"
                label="路由路径"
                align="center"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100"
                align="center"
            >
                <template slot-scope="scope">
                    <el-button
                        @click="handleEdit(scope.row)"
                        type="text"
                        size="small"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
        </global-table>
        <!-- 新建菜单 -->
        <Menu ref="menu"></Menu>
    </div>
</template>

<script>
import GlobalTable from '@/components/GlobalTable/index.vue'
import TableMixins from '@/components/GlobalTable/index.js'
import Menu from './modules/menu'

export default {
    components: {
        GlobalTable,
        Menu
    },
    mixins: [TableMixins],
    data() {
        return {
            search: {
                page: 1,
                limit: 10,
                keyword: ''
            },
            url: {
                list: 'sys/company/list.ashx'
            }
        }
    },
    methods: {
        handleAddMenu() {
            this.$refs.menu.add()
        }
    }
}
</script>

<style lang="less" scoped></style>
