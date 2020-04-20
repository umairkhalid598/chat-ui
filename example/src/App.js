import React from 'react'

import { Chat } from 'chat-ui'
import 'chat-ui/dist/index.css'

const App = () => {
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
  return <Chat messages={messages} />
}

export default App
