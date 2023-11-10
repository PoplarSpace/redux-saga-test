import { takeEvery, select, call, put } from "redux-saga/effects";

import axios from "axios";

import { actions } from "../../constant";

export function* loginSaga() {
  yield takeEvery(actions.LOGIN, function*() {
    try {
      const userInfo = yield select(state => state.user.data);
      // 发送网络请求到后台
      const res = yield call(axios.get, "http://127.0.0.1:7001/api/login", {
        params: { ...userInfo }
      });
      if (res.status === 200) {
        // 发送一个成功的 action
        yield put({
          type: actions.SUCCESS_LOGIN,
          token: res.data.token
        });
      } else {
        yield put({
          type: actions.ERROR_LOGIN
        });
      }
    } catch (error) {
      // 发送一个登录失败的action
      yield put({
        type: actions.ERROR_LOGIN
      });
    }
  });
}
