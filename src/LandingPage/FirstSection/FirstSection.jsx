import './FirstSec.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

const FirstSection = () => {
  return (
    <div>
      <div className='firsSec'>
      <Component1/>
      <Component2/>
      </div>
      <Component3/>
    </div>
  )
}

export default FirstSection
