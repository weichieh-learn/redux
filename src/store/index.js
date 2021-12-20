import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState, //等同initialState:initialState
    reducers: {
        // 不須再寫action.type的if check
        // 使用了toolkit之後seems可以直接mutate existing state
        // 是因為toolkit會使用內部的imgur package來偵測code並且自動複製existing state，產生新的state obj，讓所有的state都保存下來
        increment(state) {
            state.counter++
        },
        
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const store = configureStore({
    // reducer: { counter: counterSlice.reducer }
    reducer: counterSlice.reducer 
})

// counterSlice.actions.toggleCounter() returns an action obj of this shape: { type: 'some auto-generated unique identifier' }
export const counterActions = counterSlice.actions

export default store