# 记录redux-saga学习以及练习实例

### 基础知识
##### 关联store

- 在redux里面导入applyMiddleware
- 导入createSagaMiddleware
- 导入自己创建的saga
- 调用createMiddleware返回middleware实例对象
- 通过createStore第三个参数来关联
- 运行saga,通过middleware.run(自定义saga)

##### saga辅助函数
- takeEvery(pattern,saga,...args)，触发多少次异步action，就执行多少次。
- takeLatest(pattern,saga,...args)，每次触发，会取消掉上一次正在执行的异步任务。
- throttle(ms,pattern,saga,...args)，匹配到一个对应的action后，会派生一个saga任务；但是同时还会接受一次最近的action放在buffer中，在第一个参数（时间）内将不会再去派生执行其他更多异步任务。

这三个辅助函数都是用来监听action的
只要action发送过来了，就会触发对应的saga函数调用

##### Effect函数
- select(selector)，获取state
- call(fn, ...args)
- take(pattern),阻塞方法，用来匹配发送的action
- put(action),用来命令middle向store发送一个action

### 示例实现
##### 准备工作
##### 构建redux-saga
- 安装redux-saga
- 在store目录中创建 sagas目录
- 创建loginSaga.js和listSaga.js分别来对两个页面进行异步进行处理
- 在saga/index.js中利用all副作用函数同时运行loginSaga和listSaga
- 在store/index.js中关联saga
- 利用middleware.run运行默认saga
##### 实现登录功能
- 需要在userReducer里面判断匹配的action，然后不需要做任何处理，直接把发送过来的action进行return
- 在loginSaga里面利用takeEvery来进行action判断
- 利用select来获取发送过来的数据
- 安装axios,我们利用axios来进行网络请求
- 利用call方法调用异步请求，传入对应参数
- 获取到数据后，利用put副作用来发送请求成功的action
- 如果获取失败，利用Put来发送请求失败的action
##### 实现list页面功能
- 当list页面加载的时候，应该发送action去进行列表数据请求
- 在listReducer里面匹配对应的action，如果是异步则直接return
- 在listSaga里面利用takeEvery来进行监听
- 利用call方法来调用异步请求，传入对应参数
- 当获得到数据后，利用put副作用发送请求成功的action
- 如果获取失败，利用put来发送请求失败的action
7.在listReducer里面处理请求成功和请求失败的action
