import { createStore } from "redux"

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
    // 可以改成switch
    // reducer 不會自動整合新的state，會直接覆蓋過去，所以要確保return的obj有每個state的值
    // NEVER do this!!(mutate existing state):
    // state.counter++; return state; (雖然可以work但很糟，因為obj和array在JS裡是reference values所以可以work，但不要用)
    // 不要直接改現有的state，而是要return一個新的state obj
    // 補充: https://academind.com/tutorials/reference-vs-primitive-values
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store