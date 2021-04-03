import { ListItem, ListItemText, withStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"

const StyledListItem = withStyles(() => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#0e1621",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#0e1621",
    },
    "&.MuiListItem-button:hover": {
      backgroundColor: "#0e1621",
    },
  },
}))(ListItem)

export class Chat extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleListItemClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <StyledListItem
        button={true}
        selected={this.props.active}
        onClick={this.props.handleListItemClick}
      >
        <ListItemText primary={this.props.title} />
      </StyledListItem>
    )
  }
}
