import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  // useSelector: select which data we want from the store
  // (this function will be executed by React-Redux, pass state in and output the part of the state we need)
  // always have the latest counter
  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
