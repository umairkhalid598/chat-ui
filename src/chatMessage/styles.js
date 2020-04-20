import styled from 'styled-components'

export const MessageText = styled.div`
  height: 20px;
  display: flex;
  align-self: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isSender ? 'lightgrey' : 'darkgrey')};
`

export const MessageImage = styled.img`
  width: 200px;
  height: 200px;
`
