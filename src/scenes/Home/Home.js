import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CSSModules from 'react-css-modules'
import Counter from './components/Counter/Counter'
import { toggleEditing, addCounter, removeCounter } from './HomeDuck'
import styles from './Home.css'

export default CSSModules(() => {
  const isEditing = useSelector(state => state.home.isEditing)
  const counters = useSelector(state => state.home.counters)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
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
      <div styleName="counter-list">
        {counters.map((counter, key) => (
          <div key={key}>
            <Counter {...counter} id={key}/>
            {isEditing && (
              <div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => dispatch(removeCounter({ id: key }))}>
                <span>delete</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}, styles)
