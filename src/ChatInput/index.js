import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChatInputBox, InputTextArea, InputButton, IconButton } from './styles'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'

const ChatInput = (props) => {
  const { value, handleInputChange, handleSubmit } = props
  const [rows, setRows] = useState(1)
  const handleChange = (e) => {
    const textRowCount = e.target ? e.target.value.split('\n').length - 1 : 0
    setRows(textRowCount + 1)

    handleInputChange(e)
  }
  return (
    <ChatInputBox>
      <InputTextArea
        id='chat-input-textarea'
        rows={rows}
        value={value || ''}
        onChange={handleChange}
      />
      <InputButton
        onClick={(e) => {
          setRows(1)
          handleSubmit(e)
        }}
      >
        <IconButton icon={faPaperPlane} />
      </InputButton>
    </ChatInputBox>
  )
}

ChatInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

ChatInput.defaultProps = {
  value: '',
  handleInputChange: () => undefined,
  handleSubmit: () => undefined
}

export default ChatInput
