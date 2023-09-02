import styled from 'styled-components'

export const Container = styled.div`
  width: 28rem;
  height: 22rem;
  margin: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`
export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 16rem;
  object-fit: cover;
`
export const Text = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
`
