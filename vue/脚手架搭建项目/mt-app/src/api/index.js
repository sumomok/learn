import axios from '@/axios.js'

var api = {
    getSearchHotWord(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params);
    },
    getSearchList(params) {
        return axios.get("/api/meituan/header/search.json",params)
    },
    login(params) {
        return axios.get("/api/meituan/login",params)
    },
    register(params) {
        return axios.get("/api/meituan/register",params)
    },
    getNav(params) {
        return axios.get("/api/meituan/index/nav.json",params)
    },
    getResultsByKeywords(params) {
        return axios.get("/api/meituan/index/resultsByKeywords.json",params)
    },
    getCityList(params) {
        return axios.get("/api/meituan/city/cityList.json",params)
    },
    getHotCity(params) {
        return axios.get("/api/meituan/city/hot.json",params)
    },
    getProvince(params) {
        return axios.get("/api/meituan/city/province.json",params)
    },
    getRecents(params) {
        return axios.get("/api/meituan/city/recents.json",params)
    },
    getGoodsList(params) {
        return axios.get("/api/meituan/list/goodsList.json",params)
    },
    getRecommend(params) {
        return axios.get("/api/meituan/list/recommend.json",params)
    },
    getClassify(params) {
        return axios.get("/api/meituan/list/classify.json",params)
    },
    getAreaList(params) {
        return axios.get("/api/meituan/list/areaList.json",params)
    },
    getPosition(params) {
        return axios.get("/api/meituan/city/getPosition.json",params)
    },
    getDetail(params) {
        return axios.get("/api/meituan/product/detail.json",params)
    },
    
}
export default api