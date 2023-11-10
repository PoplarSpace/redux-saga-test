import { actions } from "../../constant";

export function userReducer(state = {}, action) {
  switch (action.type) {
    case actions.LOGIN:
      return Object.assign({}, state, action);
    case actions.SUCCESS_LOGIN:
      // 如果登录成功，我们需要把token 缓存到本地
      const { token } = action;
      localStorage.setItem("hm-token", token);
      // 通知前台页面，登录成功了
      return {
        status: 1
      };
    case actions.ERROR_LOGIN:
      return {
        status: 2
      };
    default:
      return state;
  }
}
