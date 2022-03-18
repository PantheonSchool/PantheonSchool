import React from 'react'
import './home.css'
const Cover = React.lazy(() => import('./Cover/Cover'))

const Home = () => {
  return (
    <>
      <Cover />
    </>
  )
}

export default Home