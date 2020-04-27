import styled from 'styled-components'

export const MessageText = styled.p`
  height: auto;
  min-width: 2rem;
  margin: 0;
`

export const MessageImage = styled.img`
  width: 200px;
  height: 200px;
`

export const Message = styled.div`
  width: fit-content;
  padding: 0.4rem;
  border-radius: 0.47rem;
  margin-top: 1rem;
  background-color: ${(props) => (props.isSender ? '#4d7cfe' : '#F9F9F9')};
  color: ${(props) => (props.isSender ? '#ffffff' : '#717172')};
  align-self: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
`
