import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Form() {
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    fetch(`https://assets.cdn.soomgo.com/data/exam/mock/input_${location.pathname.slice(1)}.json`)
      .then((res) => res.json())
      .then((res) => console.log(res))
  }, [])

  return <div>{`This is Form page ${location.pathname}`}</div>
}
