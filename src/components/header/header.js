import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

export class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>{this.props.title}</h1>
      </div>
    )
  }
}
