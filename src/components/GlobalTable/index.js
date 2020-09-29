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
                    Picture: '无',
                    RealName: '杨永琪',
                    Sex: '男',
                    UserPhone: '15166777733',
                    MINumber: '454867421',
                    IDCard: '370830199612176813',
                    Point: '200分',
                    AllPay: '200元',
                    Number: '89.9',
                    FamilyNum: '12名',
                    FriendNum: '1名'
                }
            ]
        }
    }
}
