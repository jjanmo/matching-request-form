import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
`
export const ContentWrapper = styled.div`
  width: 56rem;
  height: 64rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid ${colors.gray03};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const SpinnerWrapper = styled(ContentWrapper)`
  justify-content: center;
  align-items: center;
`
export const Title = styled.h2`
  margin-bottom: 5rem;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
`
export const ButtonContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;
`
