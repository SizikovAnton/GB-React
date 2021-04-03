import PropTypes from "prop-types"
import React from "react"

import styles from "./message.module.css"

export class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }

  render() {
    let msgCss
    if (this.props.author === "user") {
      msgCss = styles.message + " " + styles.userMessage
    } else {
      msgCss = styles.message
    }

    return (
      // TODO Найти как передавать несколько классов в className
      <div className={msgCss}>
        <p className={styles.author}>{this.props.author}</p>
        <p className={styles.text}>{this.props.message}</p>
      </div>
    )
  }
}
