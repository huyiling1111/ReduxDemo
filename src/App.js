import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

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
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)

  }

  btnAdd = () => {
    console.log(store.getState(), 'jjj')
    const action = {
      type: 'addItem'
    }
    store.dispatch(action)

  }
  deleteItem = (index) => {
    const action = {
      type: 'deleteItem',
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>

          <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.changeInputValue} />
          <Button type="primary" onClick={this.btnAdd}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.list}
            //关键代码-----------end
            renderItem={(item, index) => (<List.Item onClick={() => { this.deleteItem(index) }}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}
export default App;