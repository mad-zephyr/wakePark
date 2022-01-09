import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Href = (props) => {
  const {target, text, children} = props
  
  if (children) {
    return <Link to={target}>{children}</Link> 
  }
  if (text) {
    return <Link to={target}>{text}</Link> 
  }
}

Href.propTypes = {
  target: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element
}

export default Href