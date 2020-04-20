import styled from 'styled-components'

export const ChatMessageUi = styled.div`
  height: 20px;
  display: flex;
  align-self: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isSender ? 'lightgrey' : 'darkgrey')};
`
