import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div``
export const Question = styled.div`
  font-size: 2rem;
  font-weight: 500;
`
export const OptionsContainer = styled.div`
  position: relative;
  margin: 3em 0 5rem;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label<{ checked: boolean }>`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.gray03};
  border-radius: 0.5rem;

  color: ${({ checked }) => (checked ? colors.green01 : colors.gray01)};

  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  & input {
    display: none;
  }
  & + & {
    margin-top: 2rem;
  }
`
export const Checkbox = styled.span<{ checked: boolean }>`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ checked }) => (checked ? colors.green01 : colors.gray03)};
`

export const Select = styled.select<{ selected: boolean }>`
  padding: 1.5rem;
  border: 1px solid ${colors.gray03};
  border-radius: 0.5rem;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ selected }) => (selected ? colors.gray01 : colors.gray02)};
  appearance: none;

  &:focus {
    outline: 4px solid ${colors.green02};
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-40%);
`
