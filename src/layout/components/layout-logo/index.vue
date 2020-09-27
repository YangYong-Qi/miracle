<template>
    <div>
        <div :class="['logo', { 'logo-min': isCollapse }]" class="logo">
            <a href="/">
                <img
                    src="../../../assets/logo-min.png"
                    alt=""
                    v-if="isCollapse"
                />

                <img src="../../../assets/logo.png" alt="" v-else />
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LayoutLogo',
    computed: {
        ...mapGetters(['isCollapse'])
    }
}
</script>

<style lang="less" scoped>
.logo {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #101117;
    text-align: center;
    img {
        width: 198px;
        height: 49px;
        vertical-align: middle;
    }
}
.logo-min {
    img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
    }
}
</style>
