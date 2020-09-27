<template>
    <div class="table-mian">
        <div>
            <el-table :data="data" stripe border :height="height">
                <slot></slot>
            </el-table>
        </div>
        <div class="table-pagination">
            <el-pagination
                current-page.sync="5"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import TableMixins from './index.js'

export default {
    name: 'GlobalTable',
    mixins: [TableMixins],
    props: ['data'],
    data() {
        return {
            curHeight: 0
        }
    },
    beforeMount() {
        this.height =
            (document.documentElement.clientHeight ||
                document.body.clientHeight) - 240
    },
    mounted() {
        console.log(this.data)
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.table-mian {
    position: relative;
    margin-top: 10px;
    .table-pagination {
        position: absolute;
        bottom: -40px;
        right: 0;
    }
}
</style>
