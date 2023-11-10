import {all} from 'redux-saga/effects'

// 导入 listSaga 跟  loginSaga
import {loginSaga} from './loginSaga'
import {listSaga} from './listSaga'
/**
 * 入口  
 * 所做的事情就是去整合所有的saga
 * 通过 all 
 */
export function* defSaga(){
     yield all([loginSaga(),listSaga()])
}