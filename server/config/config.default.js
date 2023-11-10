/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1585393432181_5370";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 安全配置 （https://eggjs.org/zh-cn/core/security.html）
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 允许访问接口的白名单
    domainWhiteList: ["http://localhost:3000"]
  };
  // 跨域配置
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  config.jwt = {
    secret: "123456"
  };
  return {
    ...config,
    ...userConfig
  };
};
