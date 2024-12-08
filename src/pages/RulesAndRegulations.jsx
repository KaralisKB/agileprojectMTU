import React from "react";
import "./RulesAndRegulations.css";

const RulesAndRegulations = () => {
  return (
    <div className="rules-container">
      <h1 className="rules-title">Visitor's Rules and Regulations</h1>
      <p>
        Your registration for the Exhibition, or entry to our exhibition venue,
        signifies your acceptance of these Rules and Regulations and any other
        rules and regulations referenced herein or reasonably notified to you at
        the Exhibition venue, with which you agree to observe and comply.
      </p>
      <div className="rule-section">
        <h2>1. Visitor’s Conduct</h2>
        <p>
          You shall not do or permit to be done any action which causes or may
          cause any disturbance, nuisance, annoyance, inconvenience, damage or
          danger to any person or thing or which in the opinion of the Organizer
          does not conform to the general standards of the Exhibition or
          constitutes a breach of these Rules and Regulations. We reserve the
          right to refuse admittance to any visitor or to require any visitor to
          leave if their behavior is in breach of these Rules and Regulations,
          or contravenes applicable laws or regulations. Our opinion is final in
          this regard.
        </p>
      </div>
      <div className="rule-section">
        <h2>2. Liability</h2>
        <p>
          We shall not be liable for any loss of or damage to any of your
          property occurring in or about the Exhibition venue, or for the death
          of or any injury sustained by any visitor whilst in or about the
          Exhibition venue, other than for death or injury resulting from our
          negligence or which otherwise cannot be excluded or restricted at law.
        </p>
        <p>
          You agree that we shall not incur any liability to you for any goods
          or services offered or sold by, or representations made by, any
          Exhibitor at the Exhibition.
        </p>
      </div>
      <div className="rule-section">
        <h2>3. Recording</h2>
        <p>
          You shall not record images in any form while attending the Exhibition
          without our prior written consent. Such prohibition includes, but is
          not limited to, the taking of photographs, video or digital recording
          of any type and drawing or sketching of images.
        </p>
        <p>
          You acknowledge and agree that we may take photographs/videos which
          could include images of you while attending the Exhibition. You hereby
          consent to and grant to us, the unrestricted, perpetual, worldwide,
          royalty-free and transferable right and license to use such images
          worldwide without any compensation.
        </p>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
