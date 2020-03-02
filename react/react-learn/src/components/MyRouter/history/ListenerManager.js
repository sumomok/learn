export default class ListenerManager {
    // 存放监听器的数组
    ListenerArr = []
    addListener(listener) {
        this.ListenerArr.push(listener)
        const unListener = () => {
            const index = this.ListenerArr.indexOf(listener);
            this.ListenerArr.splice(index, 1)
        }
        return unListener
    }
    /**
     * 触发所有的监听器
     * @param {*} location 
     * @param {*} action 
     */
    triggerListener(location, action) {
        for (const Listener of this.ListenerArr) {
            Listener(location, action)
        }
    }
}