import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.actions.js'

function Counter (props) {
    const { count, increment, decrement } = props
    return <div>
        <button onClick={ () => increment(5) }>+</button>
        <span>{ count }</span>
        <button onClick={ () => decrement(5) }>-</button>
    </div>
}

// 1.connect 帮助我们订阅store, 当store方法中的状态发生改变的时候，会重新渲染组件
// 2.connect 可以让我们获取store中的状态，将状态通过组件中的props属性映射给组件
// 3.connect 可以让我们获取 dispatch 方法

const mapStateToProps = state => ({
    count: state.counter.count,
})

/* const mapDispatchToProps = dispatch => ({
    // increment () {
    //     dispatch({ type: 'increment' })
    // },
    // decrement () {
    //     dispatch({ type: 'decrement' })
    // }
    
    // ...bindActionCreators({
    //     increment () {
    //         return { type: 'increment' }
    //     },
    //     decrement () {
    //         return { type: 'decrement' }
    //     }
    // }, dispatch)

    ...bindActionCreators(counterActions, dispatch)
}) */

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)