import { Link } from 'react-router-dom'
import * as S from './Card.style'

export interface Props {
  type: 'lesson' | 'clean'
  text: string
  pathname: string
}

export default function Card({ type, text, pathname }: Props) {
  const thumbnailUrl = `/${type}_thumbnail.webp`

  return (
    <S.Container>
      <Link to={pathname}>
        <S.Thumbnail src={thumbnailUrl} alt="thumbnail" />
        <S.Text>{text}</S.Text>
      </Link>
    </S.Container>
  )
}
