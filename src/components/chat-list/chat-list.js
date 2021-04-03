import { List } from "@material-ui/core"
import React from "react"
import { Chat } from "./chat"

import styles from "./chat-list.module.css"

export class ChatList extends React.Component {
  state = {
    chats: ["chat1", "chat2", "chat3", "chat4"],
    activeChat: 0,
  }

  handleListItemClick = (index) => {
    this.setState({ activeChat: index })
  }

  render() {
    return (
      <List className={styles.chatList}>
        {this.state.chats.map((title, index) => (
          <Chat
            key={index}
            title={title}
            active={index === this.state.activeChat}
            handleListItemClick={() => this.handleListItemClick(index)}
          />
        ))}
      </List>
    )
  }
}
