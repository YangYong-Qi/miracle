import Api from './seivice'
export default {
    data() {
        return {
            dialogFormVisible: false,
            title: '',
            multipleSelection: [],
            loading: true,
            total: 0,
            tableData: []
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        changeTableIndex(index) {
            this.loading = true
            this.search.page = index
            this.getTableList(this.url, this.search)
        },
        changeTableSize(size) {
            this.loading = true
            this.search.limit = size
            this.getTableList(this.url, this.search)
        },
        handleAdd() {
            this.$refs.modalForm.add()
            this.$refs.modalForm.title = '新增'
        },
        handleEdit: function(record) {
            this.$refs.modalForm.edit(record)
            this.$refs.modalForm.title = '编辑'
        },
        async getTableList(url, data) {
            console.log(url)
            console.log(data)
            console.log(Api)
            console.log(this.search)
            // let response = await Api.getTableList(url.list, data)
            // this.tableData = response.data
            // this.total = response.count
            // this.loading = false
            this.tableData = [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                    tag: '公司'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                    tag: '家'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }
            ]
            console.log(this.tableData)
        }
    }
}
