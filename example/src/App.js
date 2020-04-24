import React, { useState } from 'react'

import { Chat } from 'chat-ui'
import 'chat-ui/dist/index.css'

const App = () => {
  const [value, setValue] = useState("")
  const messages = [
    {
      id: 1,
      isSender: true,
      text: 'Hi'
    },
    {
      id: 2,
      isSender: false,
      text: 'Hi, how are you?'
    },
  ]
  console.log(value)
  return <Chat messages={messages} value={value} handleInputChange={(e) => setValue(e.target.value)} />
}

export default App
