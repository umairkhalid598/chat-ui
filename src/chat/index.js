import React from 'react'
import PropTypes from 'prop-types'
import { ChatBox } from './styles'
import ChatMessage from '../chatMessage'
import ChatInput from '../ChatInput'

const Chat = (props) => {
  const { messages, value, handleInputChange } = props
  return (
    <ChatBox>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <ChatInput value={value} handleInputChange={handleInputChange} />
    </ChatBox>
  )
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired || PropTypes.string.isRequired,
      isSender: PropTypes.bool.isRequired,
      text: PropTypes.string,
      imageUrl: PropTypes.string
    })
  )
}

export default Chat
