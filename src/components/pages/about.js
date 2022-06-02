import React from "react";

import Fishing from "../../../pictures/content/yellowfin-tuna_lg (1).jpg"

export default function() {
  return (
    <div className="about-page-container">
      <div className="about-content">
        
        <div className="about-content-wrapper">
        <p className="about-title">100 years of craftmanship...</p>
        </div>

        <div className="spacer40"></div>


        <div className="about-content">
         <div className="zone-2" > 
         A New Era in Boating <br />Originally founded in 1921 by Miami native Captain Ron Pitts, Trident Yachts was born from the demand for a boat capable of withstanding the most rigorous fishing experience. Trident's unique, high quality boats quickly developed a devoted customer base. By selling directly to customers and cutting out the middleman, the captain was able to also offer his outstanding boats at lower prices than competitors.
         </div>

        </div>

        <div className="spacer40"></div>


        <div className="zone-3">
        Captain Beto discovered Trident in 1993 <br /> when he ordered his first boat from the company. Captain Ron quickly sparked his interest and imagination as he included Beto in the creation process of his boat; allowing for multiple opportunities to customize certain aspects of the boat. Beto felt much more personally connected to and proud of his new boat than if he had simply picked it out of a catalogue with no input in the final product. He was sold, not just on the boat but also on the company culture and its unique customer experience.
        <img src={Fishing} a="fishboy" />

        </div>
      
    </div>
    </div>
  );
}