import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
  return (
    <div className='container Title'> 
        <h1 className='col'> Todo list </h1>
        <h1 className='col Dark'> {props.all - props.done} more to do, done {props.done} </h1>
    </div>
  )
}

Title.propTypes = {

    allDo: PropTypes.number,
    done: PropTypes.number

}

export default Title