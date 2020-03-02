export default class BlockManager {
    constructor(getUserConfirmation) {
        this.getUserConfirmation = getUserConfirmation;
        this.promt = null;
    }
    addBlock(massage) {
        if (typeof massage !== 'string' && typeof massage !== 'function') return
        this.promt = massage
        return () => {
            this.promt = null
        }
    }
    triggerBlock(location, action, callback) {
        if (!this.promt) callback()
        if (typeof massage === 'string') this.getUserConfirmation(this.promt)
        if (typeof massage === 'function') this.getUserConfirmation(this.promt(location, action), result => {
            if (result) {
                callback()
            }
        })
    }
}
