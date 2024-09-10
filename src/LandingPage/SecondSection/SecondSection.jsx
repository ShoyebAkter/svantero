import "./SecondSec.css";

const SecondSection = () => {
  return (
    <div className="secondSec">
      <div>
        <img className="flowerSec" src="/flower.png" alt="" />
        <div className="download"><a href="#footer">Download Whitepaper</a></div>
      </div>
      <div className="rightSection">
        <div className="how">How is Svantero different?</div>
        <div className="approach">
          Our Unique Approach to Sustainability and Growth
        </div>
        <div className="writeSec">
          <div className="leftWriteSec">
            <div className="singleSec">
              <div class="image-column">
                <img src="/double.png" alt="Image 1" />
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>

              <div>
                <div className="greenHeading">
                  Integration of Blockchain for Transparency and Trust
                </div>
                <div className="detailsSec">
                  Blockchain ensures every transaction is secure, transparent,
                  and immutable, providing trust for all stakeholders involved
                  in the carbon credit market.
                </div>
              </div>
            </div>
            <div className="singleSec">
              <div class="image-column">
                <img src="/double.png" alt="Image 1" />
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>
              <div>
                <div className="greenHeading">
                  Comprehensive <br /> Tokenomics
                </div>
                <div className="detailsSec">
                  Our tokenomics are designed to create sustainable value for
                  stakeholders, with mechanisms in place to ensure price
                  stability and long-term growth.
                </div>
              </div>
            </div>
            <div className="singleSec">
              <div class="image-column">
                <img src="/double.png" alt="Image 1" />
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>
              <div>
                <div className="greenHeading">
                  Broad Use Cases and <br /> Applications
                </div>
                <div className="detailsSec">
                  Svantero’s solutions extend beyond carbon credits, offering
                  applications across various industries, from agriculture to
                  energy production.
                </div>
              </div>
            </div>
          </div>
          <div className="rightWriteSec">
            <div className="singleSec">
              <div class="right-image-column">
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>
              <div>
                <div className="greenHeading">
                  Hybrid <br /> Architecture
                </div>
                <div className="detailsSec">
                  Our platform combines the best of both centralized and
                  decentralized technologies to deliver efficiency, security,
                  and flexibility.
                </div>
              </div>
            </div>
            <div className="singleSec">
              <div class="right-image-column">
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>
              <div>
                <div className="greenHeading">
                  AI-Based Initiative <br /> Verification
                </div>
                <div className="detailsSec">
                  Utilizing advanced AI, we verify and validate carbon offset
                  initiatives, ensuring authenticity and compliance with
                  international standards.
                </div>
              </div>
            </div>
            <div className="singleSec">
              <div class="right-image-column">
                <img src="/double.png" alt="Image 2" class="shift-right" />
              </div>
              <div>
                <div className="greenHeading">
                  Strong Regulatory <br /> Compliance
                </div>
                <div className="detailsSec">
                  We prioritize adherence to global regulatory standards,
                  ensuring that our operations meet and exceed legal
                  requirements in every market we operate in.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
