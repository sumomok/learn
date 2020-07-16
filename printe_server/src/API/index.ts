import axios, { AxiosRequestConfig } from 'axios';
import options from './apiOptions';
import { UserLoginParams, TerminalInfoParams, ApplyTempletParams, PrintInfoParams, SwitchInfoParams, TemplateElecParams, TemplateInfoParams, PackageInfoParams, DeviceCommandParams } from '../types/ApiParams';
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://' + options.API.baseUrl + ':' + options.API.port;
    console.log(axios.defaults.baseURL);
}
let TerminalNO = '101', TerminalIP = '10.100.255.18';
// axios.defaults.baseURL = 'http://192.168.10.4:8020';
if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    // TerminalNO = window.getJsonObjet('AppConf').TerminalNO;//获取本机编号
    // @ts-ignore
    // TerminalIP = window.getJsonObjet('AppConf').TerminalIP; //获取本机IP
}
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.data) {
        config.data["TerminalNO"] = TerminalNO;
        config.data["TerminalIP"] = TerminalIP;
    }
    return config
}, (err) => {
    // top.WriteLog(err)
})
var api = {
    UserLogin(params: UserLoginParams) {
        return axios.post('/api/UserLogin', params)
    },
    TerminalInfo(params: TerminalInfoParams) {
        return axios.post('/api/TerminalInfo', params)
    },
    TemplateInfo(params: TemplateInfoParams) {
        return axios.post('/api/TemplateInfo', params)
    },
    TemplateElec(params: TemplateElecParams) {
        return axios.post('/api/TemplateElec', params)
    },
    SwitchInfo(params: SwitchInfoParams) {
        return axios.post('/api/SwitchInfo', params)
    },
    PrintInfo(params: PrintInfoParams) {
        return axios.post('/api/PrintInfo', params)
    },
    PackageInfo(params: PackageInfoParams) {
        return axios.post('/api/PackageInfo', params)
    },
    DeviceCommand(params: DeviceCommandParams) {
        return axios.post('/api/DeviceCommand', params)
    },
    ApplyTemplet(params: ApplyTempletParams) {
        return axios.post('http://' + options.API.baseUrl + ':' + options.API.applyTemplatePort + '/applyTemplate', params)
    }
}
export default api