import PropTypes from "prop-types"
import React from "react"

export default class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <b>{this.props.author}</b>: {this.props.message}
      </div>
    )
  }
}
