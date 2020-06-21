<template>
    <div class="container">
        首页
        <vant-search placeholder="搜索"></vant-search>
        <i class="iconfont icon-wode"></i>
        
        <!-- tabBar -->
        <van-tabbar
            :active="tabBarActive"
            active-color="#8AD474"
            inactive-color="#868686"
            @change="tabBarChange"
        >
            <van-tabbar-item>
                <i slot="icon" class="iconfont icon-shouye tab-icon"></i>
                <i slot="icon-active" class="iconfont icon-shouye tab-icon-active"></i>首页
            </van-tabbar-item>
            <van-tabbar-item icon="search">
                <i slot="icon" class="iconfont icon-kuaisuxiadan tab-icon"></i>
                <i slot="icon-active" class="iconfont icon-kuaisuxiadan tab-icon-active"></i>快速下单
            </van-tabbar-item>
            <van-tabbar-item icon="friends-o">
                <i slot="icon" class="iconfont icon-dingdan tab-icon"></i>
                <i slot="icon-active" class="iconfont icon-dingdan tab-icon-active"></i>订单
            </van-tabbar-item>
            <van-tabbar-item icon="setting-o">
                <i slot="icon" class="iconfont icon-wode tab-icon"></i>
                <i slot="icon-active" class="iconfont icon-wode tab-icon-active"></i>我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import wx from "@/utils/wx-api";
import utils from "@/utils/utils";
import CONFIG from "@/config";
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["tabBarActive"])
    },
    onLoad() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
