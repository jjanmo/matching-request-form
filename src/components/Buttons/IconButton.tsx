import { colors } from '@styles/theme'
import styled from 'styled-components'

interface Props {
  icon: React.ReactNode
  onClick: () => void
  color?: string
}

export default function IconButton({ onClick, icon, color = colors.black }: Props) {
  return (
    <SButton onClick={onClick} color={color}>
      {icon}
    </SButton>
  )
}

const SButton = styled.button<{ color: string }>`
  all: unset;
  padding: 0.4rem 0.8rem;
  border: ${({ color }) => `2px solid ${color}`};
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
