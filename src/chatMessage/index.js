import React from 'react'
import PropTypes from 'prop-types'
import { MessageText, MessageImage, Message } from './styles'

const ChatMessage = (props) => {
  const { message } = props

  return (
    <Message isSender={message.isSender}>
      {message.imageUrl && <MessageImage src={message.imageUrl} />}
      {message.text && <MessageText>{message.text}</MessageText>}
    </Message>
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
