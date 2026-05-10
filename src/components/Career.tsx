import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Fensory</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Fensory, a superapp for composable Real World Assets and
              Perpetuals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Lead Engineer</h4>
                <h5>DxSale</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              System Design and Backend Engineer for a high-frequency trading
              platform. Scaled the backend to $100M+ in trading volume and 120k
              weekly trades.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineer</h4>
                <h5>BlackRock — Data & AI, Aladdin</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Designed state-of-the-art risk models that ingest over 180 million
              market data points to generate institutional-grade risk and
              compliance reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
