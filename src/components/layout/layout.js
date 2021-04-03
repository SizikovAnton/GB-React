import PropTypes from "prop-types"
import React from "react"

import styles from "./layout.module.css"

export class Layout extends React.Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    chatList: PropTypes.node.isRequired,
    messageList: PropTypes.node.isRequired,
  }

  render() {
    const { header, chatList, messageList } = this.props

    return (
      <div className={styles.body}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>
          <div className={styles.chatList}>{chatList}</div>
          <div className={styles.messageList}>{messageList}</div>
        </div>
      </div>
    )
  }
}
