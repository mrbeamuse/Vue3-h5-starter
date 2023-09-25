// 判断是否是ios或者小程序
const isIos = () => {
  const u = navigator.userAgent;

  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  return isiOS;
};

const isAndroid = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  return isAndroid;
};

const isMiniProgram = () => {
  const u = navigator.userAgent;
  const isMiniProgram = u.indexOf("miniProgram") > -1;
  return isMiniProgram;
};

export { isIos, isAndroid, isMiniProgram };
