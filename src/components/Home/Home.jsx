import React from "react";
import "./Home.css";
import vespa from "../../assets/vespa.png";
const Vehicle = ({ model, description }) => {
  return (
    <>
      <div className="vespa_container">
        <div className="vespa-circle">
          <img className="vespas" src={vespa} alt="" />
        </div>
        <h3 className="vehicle-model">{model.toUpperCase()}</h3>
        <p className="vehicle-description">{description}</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <section className="homepage">
      <div className="hero">
        <h1 className="hero_header">LATEST MODELS</h1>
        <p className="hero_text">Please select a Vespa Model</p>
        <div className="vehicle-container">
          {[1, 2, 3].map((i) => (
            <Vehicle key={i} model={"Vespa C20"} description={"The Vespa C20 is such a unique model that it has been known for longevity."} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
