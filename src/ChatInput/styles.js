import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ChatInputBox = styled.div`
  width: 100%;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  height: auto;
  display: flex;
  flex-direction: row;
`

export const InputTextArea = styled.textarea`
  width: 100%;
  display: flex;
  align-self: center;
  height: ${(props) => (props.rows >= 2 ? 'auto' : '2rem')};
  max-height: 150px;
  min-height: 1.3rem;
  overflow: auto;
  padding: 0 1rem;
  outline: none;
  border-radius: 2rem;
  resize: unset;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`

export const InputButton = styled.button`
  display: flex;
  border: 0;
  border-radius: 50%;
  justify-content: center;
  align-self: center;
  height: 3rem;
  width: 3.05rem;
  max-height: 3rem;
  max-width: 3.05rem;
  background-color: #4d7cfe;
  &:focus {
    outline: none;
  }
`

export const IconButton = styled(FontAwesomeIcon)`
  color: #ffffff;
  font-size: 1rem;
  padding: 0;
`
