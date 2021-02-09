import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
// 管理仓库能力的模块
const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        return newState
    }
    if (action.type === DELETE_ITEM) { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}