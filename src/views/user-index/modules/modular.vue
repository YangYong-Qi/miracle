<template>
    <div>
        <el-dialog
            :title="title"
            :visible.sync="dialogFormVisible"
            width="1000px"
            class="form-dialog"
        >
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="120px"
                label-position="right"
                class="demo-ruleForm"
            >
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名" prop="RealName">
                            <el-input
                                size="small"
                                v-model="ruleForm.RealName"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="年龄" prop="age">
                            <el-input
                                size="small"
                                v-model="ruleForm.age"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别" prop="Sex">
                            <el-select size="small" v-model="ruleForm.Sex">
                                <el-option label="男" value="true"> </el-option>
                                <el-option label="女" value="false">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8">
                        <el-form-item label="电话" prop="UserPhone">
                            <el-input
                                size="small"
                                v-model="ruleForm.UserPhone"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="医保卡号" prop="MINumber">
                            <el-input
                                size="small"
                                v-model="ruleForm.MINumber"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="邮箱" prop="Email">
                            <el-input
                                size="small"
                                v-model="ruleForm.Email"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="生日" prop="Birthday">
                            <el-input
                                size="small"
                                v-model="ruleForm.Birthday"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="身份证" prop="IDCard">
                            <el-input
                                size="small"
                                v-model="ruleForm.IDCard"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="昵称" prop="NickName">
                            <el-input
                                size="small"
                                v-model="ruleForm.NickName"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="头像" prop="UserPhone">
                            <img-upload></img-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="地址" prop="UserPhone">
                            <el-input
                                type="textarea"
                                size="small"
                                v-model="ruleForm.UserPhone"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogFormVisible = false"
                    >取 消</el-button
                >
                <el-button
                    size="small"
                    type="primary"
                    @click="dialogFormVisible = false"
                    >确 定</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
import TableMixins from '@/components/GlobalTable/index.js'
import ImgUpload from '@/components/ImgUpload/index.vue'
export default {
    components: {
        ImgUpload
    },
    data() {
        return {
            ruleForm: {},
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入姓名',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    mixins: [TableMixins],
    methods: {
        add() {
            this.edit({})
        },
        edit(data) {
            console.log(data)
            this.dialogFormVisible = true
        }
    }
}
</script>

<style></style>
