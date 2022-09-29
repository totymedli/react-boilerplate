import React from 'react'
import { useDispatch } from 'react-redux'

import { increment, decrement } from './CounterDuck'
import styles from './Counter.scss'

export default ({ id, value }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.counter} >
      <div onClick={() => dispatch(increment({ id }))} className={styles.increment}>
        <span>+1</span>
      </div>
      <span>{value}</span>
      <div onClick={() => dispatch(decrement({ id }))} className={styles.decrement}>
        <span>-1</span>
      </div>
    </div>
  )
}
