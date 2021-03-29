import React from "react"
import ReactDOM from "react-dom"

import "@css/index.css"

const messagesArr = ["Hello"]

function msgSave() {
  const input = document.querySelector("#input")
  if (input && input.value) {
    messagesArr.push(input.value)
    input.value = ""
    render()
  }
}

const Messages = () => {
  return (
    <div>
      <h1> messages </h1>
      {messagesArr.map((message, index) => (
        <p key={index}> {message} </p>
      ))}
      <input id="input" type="text" placeholder="Введите сообщение" />
      <button id="save" onClick={msgSave}>
        Отправить
      </button>
    </div>
  )
}

function render() {
  ReactDOM.render(
    <>
      <Messages />
    </>,
    document.querySelector("#root"),
  )
}

render()
