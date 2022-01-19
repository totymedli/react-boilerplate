import React from 'react'
import { useDispatch } from 'react-redux'

import { increment, decrement } from './CounterDuck'
import styles from './Counter.scss'

export default ({ id, value }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.counter} style={{ height: '100%', textAlign: 'center' }}>
      <div onClick={() => dispatch(increment({ id }))} style={{ cursor: 'pointer', color: '#2ecc71' }}>
        <span>+1</span>
      </div>
      <span>{value}</span>
      <div onClick={() => dispatch(decrement({ id }))} style={{ cursor: 'pointer', color: '#e74c3c' }}>
        <span>-1</span>
      </div>
    </div>
  )
}
