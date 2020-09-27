<template>
    <div>
        <div class="table-top">
            <div class="table-top-left">
                <div>
                    <el-button size="small" plain @click="handleAdd"
                        >新 建</el-button
                    >
                </div>
                <div>
                    <el-button size="small" plain>启 用</el-button>
                </div>
                <div>
                    <el-button size="small" plain>停 用</el-button>
                </div>
            </div>
            <div class="table-top-right">
                <div>
                    <el-select
                        size="small"
                        class="table-top-select"
                        clearable
                        placeholder="请选择"
                    >
                        <el-option label="启用" value="1"> </el-option>
                        <el-option label="停用" value="2"> </el-option>
                    </el-select>
                </div>
                <div>
                    <el-input
                        class="table-top-input"
                        size="small"
                        placeholder="请输入内容"
                    ></el-input>
                </div>
                <div class="table-top-search">
                    <el-button size="small" plain>搜 索 </el-button>
                </div>
            </div>
        </div>
        <global-table :data="tableData">
            <el-table-column
                type="selection"
                align="center"
                fixed="left"
                width="55"
            ></el-table-column>

            <el-table-column
                prop="date"
                align="center"
                label="日期"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                align="center"
                label="姓名"
                width="120"
            >
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址1">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址2">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址3">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址4">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址5">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址6">
            </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址7">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100"
                align="center"
            >
                <!-- slot-scope="scope" -->
                <template>
                    <el-button type="text">编辑</el-button>
                </template>
            </el-table-column>
        </global-table>
        <!-- 新建会员 -->
        <modular ref="modalForm"></modular>
    </div>
</template>

<script>
import GlobalTable from '@/components/GlobalTable/index.vue'
import TableMixins from '@/components/GlobalTable/index.js'
import modular from './modules/modular'

export default {
    components: {
        GlobalTable,
        modular
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
    created() {
        this.getTableList()
    },
    mounted() {},
    methods: {}
}
</script>

<style lang="less" scoped></style>
