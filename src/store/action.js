export default {
    // 存tabBar状态
    setTabBarActive({
        commit
    }, tabBarActive) {
        commit('TAB_BAR_ACTIVE', tabBarActive);
    }
}