import Card, { CardType } from '@/components/Card'
import * as S from './Home.style'

export default function Home() {
  return (
    <S.Container>
      <S.Title>견적 요청할 서비스를 선택하세요</S.Title>

      <S.List>
        {list.map((item) => (
          <Card key={item.pathname} {...item} />
        ))}
      </S.List>
    </S.Container>
  )
}

const list: CardType[] = [
  {
    text: '사무실 대청소',
    type: 'clean',
    pathname: '/clean',
  },
  {
    text: '영어 과외',
    type: 'lesson',
    pathname: '/lesson',
  },
]
