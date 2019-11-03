import React from 'react'

const useClock = () => {
  return useSelector(
    state => ({
      lastUpdate: state.lastUpdate,
      light: state.light
    }),
    shallowEqual
  )
}

class Home extends React.Component {
  render() {
    return (
      <div>
        Current elements: {this.props.d}
        <button onClick={}>Add</button>
        <button onClick={}>Remove</button>
      </div>
    )
  }

}

export default Home