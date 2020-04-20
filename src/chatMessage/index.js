import React from 'react'
import PropTypes from 'prop-types'
import { ChatMessageUi } from './styles'

const ChatMessage = (props) => {
  const { message } = props

  return (
    <ChatMessageUi isSender={message.isSender}>{message.text}</ChatMessageUi>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number.isRequired || PropTypes.string.isRequired,
    isSender: PropTypes.bool.isRequired,
    text: PropTypes.string,
    imageUrl: PropTypes.string
  }).isRequired
}

ChatMessage.defaultProps = {
  message: {
    id: 0,
    isSender: false
  }
}

export default ChatMessage
