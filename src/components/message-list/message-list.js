import { Input, Button, withStyles } from "@material-ui/core"
import React from "react"
import { Message } from "./message"

import styles from "./message-list.module.css"

const StyledButton = withStyles(() => ({
  root: {
    "&": {
      color: "#999",
    },
  },
  outlined: {
    "&": {
      border: "1px solid #999",
      borderRadius: "10px",
    },
  },
}))(Button)

export class MessageList extends React.Component {
  state = {
    messages: [{ message: "Первое сообщение", author: "Система" }],
    value: "",
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  sendMsg = ({ author, text }) => {
    if (text) {
      this.setState((state) => ({
        messages: [
          ...state.messages,
          {
            message: text,
            author: author,
          },
        ],
        value: "",
      }))
    }
  }

  handleClick = () => {
    this.sendMsg({ author: "user", text: this.state.value })
  }

  handlePressInput = ({ code }) => {
    if (code === "Enter") {
      this.sendMsg({ author: "user", text: this.state.value })
    }
  }

  componentDidUpdate(state) {
    if (
      this.state.messages[this.state.messages.length - 1].author === "user" &&
      state.message !== this.state.messages
    ) {
      setTimeout(() => {
        this.sendMsg({ author: "mr. Robot", text: "Ответ на сообщение" })
      }, 500)
    }
  }

  render() {
    return (
      <div className={styles.messageList}>
        {this.state.messages.map((obj, index) => (
          <Message key={index} message={obj.message} author={obj.author} />
        ))}
        <div className={styles.msgForm}>
          <Input
            id="msgInput"
            disableUnderline={true}
            autoFocus={true}
            className={styles.msgForm__input}
            onChange={this.handleChangeInput}
            onKeyPress={this.handlePressInput}
            placeholder="Введите сообщение"
            value={this.state.value}
          />
          <StyledButton
            className={styles.msgButton}
            variant="outlined"
            onClick={this.handleClick}
          >
            Отправить
          </StyledButton>
        </div>
      </div>
    )
  }
}
