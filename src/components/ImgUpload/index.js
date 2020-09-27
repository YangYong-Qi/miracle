export default {
    data() {
        return {
            fileList: []
        }
    },
    methods: {
        handleImgSuccess(data) {
            this.fileList = data
        },
        handleImgRemove(data) {
            this.fileList = data
        }
    }
}
