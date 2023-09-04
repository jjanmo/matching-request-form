import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContentWrapper } from '@pages/common.style'
import { colors } from '@styles/theme'

export const EmptyWrapper = styled(ContentWrapper)`
  height: 56rem;
  padding-top: 15rem;
  align-items: center;
`
export const EmptyNotice = styled.h1`
  margin: 5rem 0;
  font-size: 3rem;
  font-weight: 600;
`
export const HomeLink = styled(Link)`
  width: 20rem;
  padding: 1rem 0;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;

  color: ${colors.gray02};
  border: 2px solid ${colors.gray02};
  border-radius: 0.5rem;
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  display: flex;

  & > button + button {
    margin-left: 1rem;
  }
`
export const Title = styled.h1`
  margin: 2rem auto;
  font-size: 2.5rem;
  word-break: keep-all;

  & .form-id {
    margin-left: 0.5rem;
    font-size: 1.4rem;
    color: ${colors.gray01};
  }
`
export const Question = styled.div<{ $isLeft: boolean }>`
  position: relative;
  padding: 1.5rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  align-self: flex-start;
  font-size: 1.8rem;
  color: ${colors.gray01};
  background-color: ${colors.green02};
  word-break: keep-all;

  &::before {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    border-top: 1rem solid ${colors.green02};
    border-bottom: 1rem solid transparent;
    bottom: -18px;
  }
`
export const SelectedOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
`
/**
 *  Item 컴퍼넌트에서 좌우 정렬 및 정렬에 따른 스타일 변경 설정
 */
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  &:nth-child(odd) {
    align-self: flex-start;

    & ${Question}::before {
      border-left: 1rem solid ${colors.green02};
      border-right: 1rem solid transparent;
      left: 15px;
    }

    & ${SelectedOptions} {
      justify-content: flex-start;
    }
  }

  &:nth-child(even) {
    align-self: flex-end;

    & ${Question}::before {
      border-left: 1rem solid transparent;
      border-right: 1rem solid ${colors.green02};
      right: 15px;
    }

    & ${SelectedOptions} {
      justify-content: flex-end;
    }
  }
`
export const Option = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
  border: 2px solid ${colors.green02};
  border-radius: 1rem;
  font-size: 1.6rem;

  & + & {
    margin-left: 1rem;
  }
`
