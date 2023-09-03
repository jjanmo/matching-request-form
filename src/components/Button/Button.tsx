import { colors } from '@styles/theme'
import styled from 'styled-components'

type Variant = 'fill' | 'outline'
interface Props {
  variant: Variant
  text: string
  onClick: () => void
}

export default function Button({ variant, text, onClick }: Props) {
  return (
    <SButton $variant={variant} onClick={onClick}>
      {text}
    </SButton>
  )
}

const SButton = styled.button<{ $variant: Variant }>`
  width: 12rem;
  height: 5rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $variant }) => ($variant === 'fill' ? colors.white : colors.green)};
  background-color: ${({ $variant }) => ($variant === 'fill' ? colors.green : colors.white)};
  border-radius: 0.5rem;
  border: ${({ $variant }) => ($variant === 'fill' ? `1px solid ${colors.green}` : `1px solid ${colors.gray03}`)};
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`
