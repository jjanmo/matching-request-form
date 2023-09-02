import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/clean">사무실 대청소</Link>
      <Link to="/lesson">영어 과외</Link>
    </div>
  )
}
