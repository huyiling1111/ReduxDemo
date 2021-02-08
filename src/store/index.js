import { createStore } from 'redux'  // 引入createStore方法
import reducer from './reducer'
const store = createStore(reducer)          // 创建数据存储仓库
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//window里有没有这个方法，有则执行这个方法,进行redux调试

export default store                 //暴露出去