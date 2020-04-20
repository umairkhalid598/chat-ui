import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { MessageText, MessageImage } from './styles'

const ChatMessage = (props) => {
  const { message } = props

  return (
    <Fragment>
      {message.imageUrl && <MessageImage src={message.imageUrl} />}
      {message.text && (
        <MessageText isSender={message.isSender}>{message.text}</MessageText>
      )}
    </Fragment>
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
