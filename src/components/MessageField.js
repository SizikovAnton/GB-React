import Message from "@components/Message"
import React from "react"

export default class MessageField extends React.Component {
  state = { messages: [{ message: "Первое сообщение", author: "Система" }] }

  handleClick = () => {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        {
          message: `Сообщение`,
          author: "Пользователь",
        },
      ],
    }))
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author !== "Бот") {
      this.setState((state) => ({
        messages: [
          ...state.messages,
          {
            message: `${
              this.state.messages[this.state.messages.length - 1].author
            }, ответ на сообщение`,
            author: "Бот",
          },
        ],
      }))
    }
  }

  render() {
    const messageElements = this.state.messages.map((obj, index) => (
      <Message key={index} message={obj.message} author={obj.author} />
    ))

    return (
      <div>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    )
  }
}
