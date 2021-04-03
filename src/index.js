import React from "react"
import ReactDOM from "react-dom"
import { Layout, Header, ChatList, MessageList } from "./components"

import "normalize.css"
import "./index.css"

ReactDOM.render(
  <Layout
    header={<Header title="Messenger" />}
    chatList={<ChatList />}
    messageList={<MessageList />}
  />,
  document.getElementById("root"),
)
