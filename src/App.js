import React, { Component } from 'react';
import store from './store/index'
import AppUI from './AppUI'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
const data = [
  '早8点开晨会，分配今天的开发工作',
  '早9点和项目经理作开发需求讨论会',
  '晚5:30对今日代码进行review'
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();  //store 里的初始数据
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  storeChange() {
    this.setState(store.getState())  //更改state为store里的newState
    console.log(store.getState(), 1111)
  }

  changeInputValue = (e) => {

    // console.log(e.target.value)
    const action = changeInputAction(e.target.value)
    store.dispatch(action)

  }

  btnAdd = () => {
    console.log(store.getState(), 'jjj')
    const action = addItemAction()
    store.dispatch(action)

  }
  deleteItem = (index) => {
    console.log('index', index)
    console.log(this.state.list)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <AppUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        btnAdd={this.btnAdd}
        deleteItem={this.deleteItem} />
    );
  }
}
export default App;