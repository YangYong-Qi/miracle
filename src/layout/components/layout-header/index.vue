<template>
    <div class="layout-header">
        <div class="layout-header-left">
            <div :class="['fold', { rotate: isCollapse }]">
                <i :class="['iconfont icon-zhedie1']" @click="SET_COLLAPSE"></i>
            </div>
            <div>
                <div class="breadcrumb">{{ title }}</div>
            </div>
        </div>
        <div class="layout-header-right">
            <div @click="fullScreen">
                <i class="iconfont icon-screenfull"></i>
            </div>
            <div class="news">
                <el-badge :value="8" class="news-badge"> </el-badge>
                <i class="iconfont icon-xiaoxi"></i>
            </div>
            <div class="name">
                <div>杨永琪</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'LayoutHeader',
    data() {
        return {
            list: []
        }
    },
    mounted() {
        console.log(this.title)
    },
    computed: {
        ...mapGetters(['isCollapse', 'title'])
    },
    methods: {
        ...mapMutations(['SET_COLLAPSE']),
        fullScreen() {
            var el = document.documentElement
            var rfs =
                el.requestFullScreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullScreen

            if (rfs) {
                rfs.call(el)
            } else if (typeof window.ActiveXObject !== 'undefined') {
                var wscript = new window.ActiveXObject('WScript.Shell')
                if (wscript != null) {
                    wscript.SendKeys('{F11}')
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
.layout-header {
    display: flex;
    justify-content: space-between;
}
.layout-header-right {
    display: flex;
    div {
        margin: 0 10px;
        cursor: pointer;
    }
    .icon-screenfull {
        font-size: 18px;
    }
    .name {
        font-size: 14px;
        margin: 0 20px;
        color: #515a6e;
    }
}
.layout-header-left .fold {
    width: 20px;
    height: 60px;
    margin-top: 1px;
    i {
        font-size: 20px;
        cursor: pointer;
    }
}
.rotate {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* Internet Explorer */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg); /* Opera */
}
.layout-header-left {
    display: flex;
    div {
        margin: 0 5px;
    }
}
.breadcrumb {
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #303133;
}
.news {
    position: relative;
    background: red;
    .news-badge {
        position: absolute;
        top: -10px;
    }
    .icon-xiaoxi {
        position: absolute;
        top: 0px;
    }
}
</style>
