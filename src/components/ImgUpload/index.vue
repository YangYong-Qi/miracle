<template>
    <el-upload
        :class="isUpload ? '' : 'uploader'"
        action="/api/sys/uploadfile.ashx "
        list-type="picture-card"
        :limit="this.limit"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :file-list="fileList"
        :on-remove="handleRemove"
    >
        <i class="el-icon-plus"></i>
    </el-upload>
</template>

<script>
export default {
    name: 'ImgUpload',
    props: ['limit', 'fileList'],
    data() {
        return {
            imageUrl: '',
            isUpload: true
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            if (this.fileList.length + 1 > this.limit) {
                this.isUpload = false
            } else {
                this.isUpload = true
            }
        },
        handleRemove(file, fileList) {
            this.$emit('handleImgRemove', fileList)
        },
        beforeUpload() {
            if (this.fileList.length + 1 >= this.limit) {
                this.isUpload = false
            } else {
                this.isUpload = true
            }
        },
        beforeRemove() {
            if (this.fileList.length - 1 < this.limit) {
                this.isUpload = true
            } else {
                this.isUpload = false
            }
        },
        handleSuccess(res, file, fileList) {
            this.$emit('handleImgSuccess', fileList)
        }
    }
}
</script>

<style></style>
<style lang="less">
.uploader {
    .el-upload {
        display: none;
    }
}
</style>
