import { actions } from "../../constant";

export function listReducer(state = {}, action) {
  switch (action.type) {
    case actions.LIST:
      // 异步的action
      return Object.assign({}, state, action);
    case actions.SUCCESS_LIST:
      // 代表请求成功
      const { data } = action;
      return {
        status: 1,
        data: [...data]
      };
    case actions.ERROR_LIST:
      return {
        status: 2
      };
    case actions.UNAUTHORIZATION:
      return {
        status: 3
      };
    default:
      return state;
  }
}
