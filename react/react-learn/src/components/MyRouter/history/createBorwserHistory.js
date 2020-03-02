import { createBrowserHistory } from 'history';
import ListenerManager from './ListenerManager';
import BlockManager from './BlockManager';
import qs from 'query-string';
export default function myCreateBorwserHistory(options) {
    const {
        basename = "",
        forceRefresh = false,
        keyLength = 6,
        getUserConfirmation = (message, callback) => { callback(window.confirm(message)) }
    } = options;
    const Listener = new ListenerManager();
    const Block = new BlockManager(getUserConfirmation);
    let history = {
        location: createLocation(basename),
        length: window.history.length,
        action: "POP",
        createHref,
        go,
        goBack,
        goForward,
        push,
        replace
    }
    /**
     * 获取完整的pathname
     * @param {*} location 
     * @param {*} basename 
     */
    function createHref(location, basename) {
        return basename + location.location.pathname
    }
    /**
     * 向地址栈中加入一个新的地址
     * @param {*} path 
     * @param {*} state 
     */
    function push(path, state) {
        let action = "PUSH";
        let result = handlePath(path, state, basename);
        window.history.pushState({
            key: createKey(keyLength),
            state: result.state
        }, null, result.path)
        if (forceRefresh) {
            window.location.href = result.path;
        }
        const location = createLocation(basename);
        Block.triggerBlock(location, () => {
            Listener.triggerListener(location, action)
            history.location = location;
            history.action = action;
        })

    }
    /**
     * 将指针指向的地址替换成新的地址
     * @param {*} path 
     * @param {*} state 
     */
    function replace(path, state) {
        let action = "RPLACE";
        let result = handlePath(path, state, basename);
        window.history.replaceState({
            key: createKey(keyLength),
            state: result.state
        }, null, result.path)
        if (forceRefresh) {
            window.location.href = result.path;
        }
        const location = createLocation(basename)
        Block.triggerBlock(location, () => {
            Listener.triggerListener(location, action)
            history.location = location;
            history.action = action;
        })
    }
    /**
     * 地址栈指针以当前地址为0进行跳转
     * @param {*} n 
     */
    function go(n) {
        window.history.go(n)
    }
    /**
     * 地址栈指针后退
     */
    function goBack() {
        window.history.back()
    }
    /**
     * 地址栈指针前进
     */
    function goForward() {
        window.history.forward()
    }
    function addDOMEvent() {
        window.addEventListener('popstate', () => {
            const location = createLocation(basename)
            Listener.triggerListener(location, 'POP');
            history.location = location;
        })
    }
    addDOMEvent();
    return history
}
function handlePath(path, state, basename) {
    if (typeof path === 'string') {
        return {
            path: path,
            state: state
        }
    } else if (typeof path === 'object') {
        let newSearch = path.search.charAt(0) === "?" ? path.search : "?" + path.search;
        let newHash = path.hash.charAt(0) === "#" ? path.search : "#" + path.search;
        let newPath = path.pathname + newSearch + newHash
        return {
            path: basename + newPath,
            state: path.state
        }
    }
}
function createLocation(basename = '') {
    let pathname = window.location.pathname;
    let reg = new RegExp(`^${basename}`);
    // 如果存在basename 将地址去掉基础地址
    pathname = pathname.replace(reg, '') === "" ? "/" : pathname.replace(reg, '');
    let location = {
        pathname: pathname,
        search: window.location.search,
        hash: window.location.hash,
        state: undefined,
    }
    let state;
    // 防止与其他插件冲突
    if (!window.history.state) {
        state = undefined;
    } else if (typeof window.history.state === 'string') {
        state = window.history.state;
    } else {
        if ("key" in window.history.state) {
            location.key = window.history.state.key;
            state = window.history.state.state;
        } else {
            state = window.history.state;
        }
    }
    location.state = state
    return location
}
function createKey(keyLength) {
    return Math.random().toString(36).substring(2, keyLength)
}
console.log(createBrowserHistory({
    basename: "/news"
}))
console.log(myCreateBorwserHistory({
    basename: "/news"
}))
console.log(window.location);
console.log(window.history)