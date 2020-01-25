import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography } from '@material-ui/core'
import CSSModules from 'react-css-modules'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { increment, decrement } from './CounterDuck'
import styles from './Counter.css'

export default CSSModules(({ id, value }) => {
  const dispatch = useDispatch()

  return (
    <Card>
      <CardContent>
        <div onClick={() => dispatch(increment(id))} data-cy="increment">
          <KeyboardArrowUpIcon />
        </div>
        <Typography>{value}</Typography>
        <div onClick={() => dispatch(decrement(id))} data-cy="decrement">
          <KeyboardArrowDownIcon />
        </div>
      </CardContent>
    </Card>
  )
}, styles)