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
                prop="Picture"
                align="center"
                label="头像"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="RealName"
                align="center"
                label="姓名"
                width="120"
            >
            </el-table-column>
            <el-table-column prop="Sex" align="center" label="性别" width="120">
            </el-table-column>
            <el-table-column
                prop="UserPhone"
                align="center"
                label="会员电话"
                width="120"
            >
            </el-table-column>

            <el-table-column
                prop="MINumber"
                align="center"
                label="医保卡号"
                width="120"
            >
            </el-table-column>

            <el-table-column prop="IDCard" align="center" label="身份证">
                <template slot-scope="scope">
                    <el-popover
                        placement="bottom"
                        width="200"
                        trigger="click"
                        :content="scope.row.IDCard"
                    >
                        <p class="show-overflow" slot="reference">
                            {{ scope.row.IDCard }}
                        </p>
                    </el-popover>
                </template>
            </el-table-column>

            <el-table-column
                prop="AllPay"
                align="center"
                label="累计消费"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="Number"
                align="center"
                label="健康得分"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="Number"
                align="center"
                label="健康得分"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="FamilyNum"
                align="center"
                label="家庭圈排名"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="FriendNum"
                align="center"
                label="朋友圈排名"
                width="120"
            >
            </el-table-column>

            <el-table-column width="120" label="操作" align="center">
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
