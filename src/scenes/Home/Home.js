import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CSSModules from 'react-css-modules'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import AddIcon from '@material-ui/icons/Add'

import Counter from './components/Counter'
import { toggleEditing, addCounter } from './HomeDuck'
import styles from './Home.css'

export default CSSModules(() => {
  const isEditing = useSelector(state => state.home.isEditing)
  const counters = useSelector(state => state.home.counters)
  const dispatch = useDispatch()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Counter
          </Typography>
          <IconButton onClick={() => dispatch(toggleEditing())} edge="start" color="inherit" aria-label="menu" data-cy="edit-settings">
            {isEditing ? <DoneIcon /> : <EditIcon /> }
          </IconButton>
        </Toolbar>
      </AppBar>
      <div styleName="counter-list">
        {counters.map((counter, key) => (
          <Counter {...counter} key={key} id={key} />
        ))}
        {isEditing &&
          <div onClick={() => dispatch(addCounter())}>
            <AddIcon />
          </div>
        }
      </div>
    </div>
  )
}, styles)
