import { colors } from '@styles/theme'

interface Props {
  color?: string
  size?: number
}

export default function Check({ color = colors.white, size = 64 }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 72 72">
      <path d="M57.658 12.643a4 4 0 0 1 1.183 5.532l-25.915 40a4 4 0 0 1-6.361.467L13.514 43.807a4.001 4.001 0 0 1 6.006-5.285l9.563 10.87 23.043-35.567a4 4 0 0 1 5.532-1.182z" />
    </svg>
  )
}
