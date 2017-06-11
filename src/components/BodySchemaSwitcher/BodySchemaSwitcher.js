import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BodySchemaSwitcher.scss'

export default class BodySchemaSwitcher extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value)
    }
  }

  render () {
    const { options } = this.props

    return (
      <form className='body-schema-switcher-form'>
        <label>This schema can be fulfilled by multiple options: </label>
        <select onChange={this.handleChange}>
          {options.map(
            (option, i) => <option key={i} value={i}>{`Option ${i + 1}`}</option>
          )}
        </select>
      </form>
    )
  }
}

BodySchemaSwitcher.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
}