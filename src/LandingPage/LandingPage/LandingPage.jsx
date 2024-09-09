
import FirstSection from '../FirstSection/FirstSection'
import Footer from '../Footer/Footer'
import FourthSec from '../FourthSection/FourthSec'
import Header from '../Header/Header'
import SecondSection from '../SecondSection/SecondSection'
import ThirdSec from '../ThirdSection/ThirdSec'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSec/>
        <FourthSec/>
        <Footer/>
    </div>
  )
}

export default LandingPage
