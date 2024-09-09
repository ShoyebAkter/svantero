
import FirstSection from '../FirstSection/FirstSection'
import Header from '../Header/Header'
import SecondSection from '../SecondSection/SecondSection'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <Header/>
        <FirstSection/>
        <SecondSection/>
    </div>
  )
}

export default LandingPage
