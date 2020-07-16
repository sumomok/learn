import React, { useState, useEffect } from 'react';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Option from './options';
import './assets/sass/index.scss';
import NotFindError from './page/404Error';
import Api from './API/index';
import Device from './components/device'

/**
 * 主入口组件
 * 此页所有的组件文件均存放在page下，为整页组件
 */
function App() {
  // 通过Options.ts中的参数来控制登录方式
  const [uploadeState, setuploadeState] = useState({ number: 0 })
  useEffect(() => {

    if (process.env.NODE_ENV === 'production') {
      // @ts-ignore
      if (!window.upaloadDeviceInfo) {
        // @ts-ignore
        window.checkiframeTimer = setInterval(() => {
          // @ts-ignore
          if (window.upaloadDeviceInfo) {
            // @ts-ignore
            clearInterval(window.checkiframeTimer)
            // @ts-ignore
            window.upaloadDeviceInfo(Api.TerminalInfo);
          }
        }, 2000)
      }
    } else if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        Api.TerminalInfo({
          TerminalStateNo: "1000",
          TerminalStateDescription: "正常",
          TerminalLevel: "info",
          submoduleDetails: [
            {
              SubMouldeNo: "PTR",
              StateCode: "1000",
              StateDescription: "正常"
            },
            {
              SubMouldeNo: "CRD",
              StateCode: "1000",
              StateDescription: "正常"
            }
          ]
        }).then(res => console.log(res));
      }, 1000 * 60)
    }
  }, [])
  let ModeArray = Option.loginMode.map(((it, index) => <Route key={index} path={it.PageUrl} component={it.comp} />))
  return (
    <>
      <Device />
      <Router>
        <Switch>
          {ModeArray}
          {/* 首页↓ */}
          <Route path="/" exact component={Home}></Route>
          {/* 404页面↓ */}
          <Route path="*" component={NotFindError}></Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
