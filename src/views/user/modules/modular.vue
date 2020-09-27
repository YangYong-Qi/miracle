<template>
    <div>
        <el-dialog
            :title="title"
            :visible.sync="dialogFormVisible"
            width="800px"
        >
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="姓名" prop="name">
                            <el-input
                                size="small"
                                v-model="ruleForm.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item label="年龄" prop="age">
                            <el-input
                                size="small"
                                v-model="ruleForm.age"
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
export default {
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
                ],
                age: [
                    {
                        required: true,
                        message: '请输入年龄',
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
