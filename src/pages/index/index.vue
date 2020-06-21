<template>
    <div class="container">
        首页
        <vant-search placeholder='搜索'></vant-search>
    </div>
</template>

<script>
import wx from "@/utils/wx-api";
import utils from "@/utils/utils";
import CONFIG from "@/config"
import { mapState, mapMutations } from "vuex";
import { TEST, MASTER_KEY } from "@/store/mutation-type";

export default {
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState(["test", "master_key"])
    },
    onLoad() {
        
    },
    methods: {
        ...mapMutations([TEST, MASTER_KEY]),
    }
};
</script>

<style lang="scss" scoped>
</style>
