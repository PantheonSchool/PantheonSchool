import slides from './SlidesData'
import { lazy } from 'react'
import './home.css'
const Cover = lazy(() => import('./Cover/Cover'))
const Slide = lazy(() => import('./Slide'))
const ExplorePantheon = lazy(() => import('./ExplorePantheon'))


const Home = () => {
  return (
    <>
      <Cover />
      <ExplorePantheon/>
      <h2 className='display-5 text-center fw-bold my-5 drop-shadow-sm'>BY THE NUMBERS</h2>
      <div className='slides'>
        {slides && slides.map((slide, index) => <Slide slide={slide} key={slide.title + index} />)}
      </div>
    </>
  )
}

export default Home