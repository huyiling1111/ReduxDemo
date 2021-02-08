// 管理仓库能力的模块


const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]


}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    return state
}