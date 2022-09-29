import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from './components/Counter/Counter'
import { toggleEditing, addCounter, removeCounter } from './HomeDuck'
import styles from './Home.scss'

export default () => {
  const isEditing = useSelector(state => state.home.isEditing)
  const counters = useSelector(state => state.home.counters)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.menu}>
        <button onClick={() => dispatch(addCounter())}>
          Add counter
        </button>
        <button onClick={() => dispatch(toggleEditing())}>
          {isEditing ? <span>Disable delete</span>: <span>Enable delete</span>}
        </button>
        <button onClick={() => dispatch(toggleEditing())}>
          Reset
        </button>
      </div>
      <div className={styles.counterList}>
        {counters.map((counter, key) => (
          <div key={key}>
            <Counter {...counter} id={key}/>
            {isEditing && (
              <div className={styles.delete} onClick={() => dispatch(removeCounter({ id: key }))}>
                <span>delete</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
