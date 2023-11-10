import { createStore, combineReducers, applyMiddleware } from "redux";

import { userReducer } from "./reducers/userReducer";

import { listReducer } from "./reducers/listReducer";

// 关联 saga
import createSagaMiddleware from "redux-saga";

import { defSaga } from "./sagas";

const middlware = createSagaMiddleware();
// 怎么去关联store

export default createStore(
  combineReducers({
    user: userReducer,
    list: listReducer
  }),
  {},
  applyMiddleware(middlware)
);

// 运行 saga
middlware.run(defSaga);
