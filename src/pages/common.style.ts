import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 56rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid ${colors.gray03};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
