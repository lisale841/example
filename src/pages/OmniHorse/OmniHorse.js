import React from "react";
import "./omniHorse.scss";

const OmniHorse = () => {
  return (
    <>
      <div className="wrapOmni">
        <div className="headerOmni">
            <h1 className="headerText">
              OMNIHORSE PRIVATE
              <span className='textGradient bold'> JOCKEY CLUB</span>
            </h1>
            <h2 className="paraText">
              Each real life omnihorse has its own membership club with benefits
              that reflect that horse's career and breeding cycle.
              <span className="textGradient"> Lady Hollywood </span>is our first
              thoroughbred to launch her NFT collection with many more to follow.  <span className="textGradient"> Metahorse </span>
              is our second NFT collection.  The price for minting each NFT membership is correlated to
              the actual value of the throughbred and  <span className="textGradient"> club benefits </span> reflect that value.  Member benefits increase as more NFTs of a single
              collection are held by a single owner.
            </h2>
        </div>
        <div className = "sliderOmni">
        <div className="linksContainerOmni">
          <div className="linksBoxOmni">
            <img src={require('./omnihorse1.png')} alt="logo" className="logo"/>
          </div>
            <div className="linksContainerOmni">
          <div className="linksBoxOmni">
            <p className="paraText">Social     Benefits     Metaverse</p>
            <div className="linksOmni paraText">Access owner-like experiences including stable visits, winner circle celebrations and more</div>
            <div className="linksOmni paraText">Access Omnihorse VIP events and upgraded seating at partner racecourses</div>
            <div className="linksOmni paraText">Unlock exclusive "first-look" conetent from trainers and race teams</div>
            <div className="linksOmni paraText">Communicate with team members, view videos and performance statistics in club portals</div>
            <div className="linksOmni paraText">Apply for syndicate ownership of your club's thoroughbred</div>
          </div>
        </div>
       </div>
      </div>
      </div>

    </>
  );
};

export default OmniHorse;
