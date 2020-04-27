import React, { useState } from 'react'

import { Chat } from 'chat-ui'
import 'chat-ui/dist/index.css'

const App = () => {
  const [value, setValue] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      isSender: true,
      text: 'Hi'
    },
    {
      id: 2,
      isSender: false,
      text: 'Hi, how are you?\n Fine'
    },
  ])
  return <Chat messages={messages} value={value} handleInputChange={(e) => setValue(e.target.value)} handleSubmit={e => {
    console.log(value)
    setMessages([...messages, {
      id: messages.length + 1,
      isSender: false,
      text: value
    }])
    setValue("")
  }} />
}

export default App
