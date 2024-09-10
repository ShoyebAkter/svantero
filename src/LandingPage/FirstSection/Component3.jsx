import './Component3.css'

const Component3 = () => {
  return (
    <div className="component3">
      <div className='trust'>Trusted by: </div>
      <div className="shopifySec">
        <img  className='designLogo' src="/shopifylogo.png" alt="" />
        <img  className='nameLogo' src="/shopifytext.png" alt="" />
      </div>
      <div>
        <img  className='imageSec' src="/amazon.png" alt="" />
      </div>
      <div>
        <img  className='imageSec' src="/alibaba.png" alt="" />
      </div>
      <div>
        <img  className='imageSec' src="/ebay.png" alt="" />
      </div>
      <div className="snapdealSec">
        <img  className='designLogo' src="/snapdeallogo.png" alt="" />
        <img className='nameLogo' src="/snapdeal.png" alt="" />
      </div>
      <div >
        <img className='imageSec' src="/walmart.png" alt="" />
      </div>
    </div>
  );
};

export default Component3;
