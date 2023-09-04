import { colors } from '@styles/theme'

interface Props {
  size?: number
  fillColor?: string
  strokeColor?: string
}

export default function Home({ size = 64, fillColor = colors.black, strokeColor = '' }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
      <path
        fill={fillColor}
        stroke={strokeColor}
        d="m16 2.594-.719.687-13 13L3.72 17.72 5 16.437V28h9V18h4v10h9V16.437l1.281 1.282 1.438-1.438-13-13Zm0 2.844 9 9V26h-5V16h-8v10H7V14.437Z"
      />
    </svg>
  )
}
