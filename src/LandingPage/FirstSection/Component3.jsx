import './Component3.css'

const Component3 = () => {
  return (
    <div className="component3">
      <div className='trust'>Trusted by: </div>
      <div className="shopifySec">
        <img  className='imageSec' src="/shopifylogo.png" alt="" />
        <img src="/shopifytext.png" alt="" />
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
        <img  className='imageSec' src="/snapdeallogo.png" alt="" />
        <img src="/snapdeal.png" alt="" />
      </div>
      <div className='imageSec'>
        <img src="/walmart.png" alt="" />
      </div>
    </div>
  );
};

export default Component3;
