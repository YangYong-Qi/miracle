<template>
    <div>
        <div class="login-main">
            <div class="login-logo">
                <img src="../../assets/logo.png" alt="" />
            </div>
            <div class="login-model">
                <div class="login-title">
                    <span>登录</span>
                </div>
                <div class="form-item">
                    <span class="form-label">手机号码</span>
                    <span
                        ><span class="form-area-num"
                            >+<span>86</span></span
                        ></span
                    >
                    <input
                        v-on:keyup.enter="submit"
                        v-model="form.username"
                        class="form-input form-input-phone"
                        placeholder="注册时填写的手机号"
                        type="text"
                    />
                </div>
                <div class="form-item">
                    <span class="form-label">登录密码</span
                    ><input
                        v-on:keyup.enter="submit"
                        class="form-input"
                        placeholder="请输入密码"
                        v-model="form.password"
                        type="password"
                    />
                </div>
                <div class="login-forget">
                    <span>忘记密码 ？</span>
                </div>
                <div class="login-button">
                    <el-button
                        @click="submit"
                        type="primary"
                        class="login-button"
                        >登 录</el-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { checkLogin } from './seivice'
import { setData } from '@/utils'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    mounted() {},
    methods: {
        async submit() {
            const { username, password } = this.form
            if (username == '') {
                this.$message.error('请输入手机号')
                return
            }
            if (password == '') {
                this.$message.error('请输入密码')
                return
            }
            let res = await checkLogin({
                ...this.form,
                password: this.$md5(this.form.password)
            }).catch(() => {})
            if (res.state == 'success') {
                this.$message.success(res.message)
                setData('uid', res.data.uid)
                this.$router.push({
                    path: '/'
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login-logo {
    margin-top: 20px;
    margin-left: 100px;
    img {
        width: 199px;
    }
}

.login-main {
    width: 100vw;
    height: 100vh;
    background: url(../../assets/login_bg.png) top left no-repeat;
    background-size: cover;
    overflow: hidden;
    .login-model {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -190px;
        margin-top: -255px;
        box-sizing: border-box;
        width: 380px;
        height: 510px;
        padding: 30px 30px 40px;
        background: #fff;
        box-shadow: 0 20px 30px 0 rgba(63, 63, 65, 0.06);
        border-radius: 10px;
    }
    .login-title {
        margin-bottom: 40px;
        span {
            color: #2589ff;
            font-size: 20px;
        }
    }
}
.form-item {
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
    margin-bottom: 30px;
}

.form-label {
    display: inline-block;
    width: 70px;
    color: #595961;
    font-size: 14px;
    margin-right: 10px;
}
.form-area-num {
    width: 32px;
    margin-right: 20px;
    display: inline-block;
    cursor: pointer;
    color: #595961;
    font-size: 14px;
}
.form-input-phone {
    padding: 5px 0 5px 10px;
    border-left: 1px solid #ddd;
}
.form-input {
    border: 0;
    outline: 0;
    font-size: 14px;
    color: #595961;
}
.form-input {
    width: 155px;
}
input {
    line-height: normal;
}
.form-input-phone {
    padding: 5px 0 5px 10px;
    border-left: 1px solid #ddd;
}
.login-forget {
    color: #9797a1;
    font-size: 14px;
    cursor: pointer;
    text-align: right;
}
.login-button {
    width: 250px;
    margin: 50px auto 10px auto;
}
</style>
