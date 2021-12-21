import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store'

import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  // useSelector: select which data we want from the store
  // (this function will be executed by React-Redux, pass state in and output the part of the state we need)
  // always have the latest counter
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) //{ type: 'some auto-generated unique identifier', paylaod: 5 }
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
