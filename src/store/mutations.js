/***
 * 处理方法
 */
import {
    TAB_BAR_ACTIVE
} from './mutation-type'

export default {
    [TAB_BAR_ACTIVE] (state,v) {
        state.tabBarActive = v;
    },
}