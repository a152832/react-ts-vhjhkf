// 定义默认状态
const defaultState = {
  msg: '你好redux',
  num: 1,
};
// 导出一个函数
export default (state = defaultState) => {
  return state;
};
