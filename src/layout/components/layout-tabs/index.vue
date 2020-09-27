<template>
    <div>
        <div class="tabs-main">
            <div
                :class="['tabs-item', { isActive: $route.name == item.name }]"
                v-for="(item, index) in tabs"
                :key="index"
            >
                <div @click="handleToPage(item)">{{ item.meta.title }}</div>
                <div
                    @click="delTabs(item)"
                    class="tabs-item-icon"
                    v-if="item.name != 'Dashboard'"
                >
                    <i class="el-icon-close"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['tabs'])
    },
    methods: {
        handleToPage(data) {
            this.$router.push({
                name: data.name
            })
        },
        delTabs(data) {
            let tabs = this.tabs
            for (const item in tabs) {
                if (tabs[item].name == data.name) {
                    tabs.splice(item, 1)
                }
            }
            this.$router.push({
                name: '/'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.tabs-main {
    display: flex;
    margin: 5px 0;
    margin-left: -5px;
    .tabs-item {
        height: 32px;
        line-height: 32px;
        background: #fff;
        border-radius: 3px;
        color: #808695;
        padding: 0 20px;
        margin: 0 5px;
        font-size: 14px;
        display: flex;
        cursor: pointer;
        .tabs-item-icon {
            margin-left: 10px;
        }
    }
    .isActive {
        color: #2d8cf0;
    }
}
</style>
