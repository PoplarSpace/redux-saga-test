import { takeEvery, call, put } from "redux-saga/effects";

import { actions } from "../../constant";

import axios from "axios";

export function* listSaga() {
  yield takeEvery(actions.LIST, function*() {
    try {
      // 先要获取 token
      const token = localStorage.getItem("hm-token");
      // 设置给请求头的时候注意，不要直接传入 token， 所以前面要拼接一个 Bearer token
      const res = yield call(axios.get, "http://127.0.0.1:7001/api/list", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.status === 200) {
        yield put({
          type: actions.SUCCESS_LIST,
          data: [...res.data.data]
        });
      } else {
        yield put({
          type: actions.ERROR_LIST
        });
      }
    } catch (error) {
      yield put({
        type: actions.UNAUTHORIZATION
      });
    }
  });
}
