<template>
    <div>
        <!-- 新建菜单 -->
        <el-drawer
            :title="title"
            :visible.sync="drawer"
            :wrapperClosable="false"
        >
            <div class="form-main">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-row>
                        <el-col :span="22">
                            <el-form-item label="菜单名称" prop="title">
                                <el-input
                                    v-model="ruleForm.title"
                                    size="small"
                                ></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="22">
                            <el-form-item label="路由名称" prop="name">
                                <el-input
                                    v-model="ruleForm.name"
                                    size="small"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="22">
                            <el-form-item label="路由路径" prop="path">
                                <el-input
                                    v-model="ruleForm.path"
                                    size="small"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="22">
                            <el-form-item label="菜单图标" prop="icon">
                                <el-input
                                    v-model="ruleForm.icon"
                                    size="small"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="22">
                            <el-form-item label="重定向" prop="icon">
                                <el-input
                                    v-model="ruleForm.icon"
                                    size="small"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="22">
                            <el-form-item label="菜单布局">
                                <el-radio-group v-model="ruleForm.component">
                                    <el-radio label="Layout">基本布局</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div class="drawer-footer">
                <el-button @click="handleClose">关闭</el-button>
                <el-button type="primary">确定</el-button>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            title: '新增',
            ruleForm: {
                component: 'Layout'
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入路由名称',
                        trigger: 'blur'
                    }
                ],
                path: [
                    {
                        required: true,
                        message: '请输入路由路径',
                        trigger: 'blur'
                    }
                ],
                title: [
                    {
                        required: true,
                        message: '请输入菜单名称',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        add() {
            this.edit({})
        },
        edit(data) {
            this.drawer = true
            console.log(data)
        },
        handleClose() {
            this.drawer = false
        }
    }
}
</script>
<style lang="less" scoped>
.form-main {
    margin-top: 20px;
}
.drawer-footer {
    position: absolute;
    bottom: 20px;
    left: 90px;
    display: flex;
    button {
        width: 200px;
    }
}
</style>
