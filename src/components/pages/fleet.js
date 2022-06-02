import React from "react";

import Boat1 from '../../../pictures/fleet/boat1.jpg';
import Boat3 from '../../../pictures/fleet/boat3.jpg';
import Boat4 from '../../../pictures/fleet/boat4.jpg';
import Boat5 from '../../../pictures/fleet/boat5.jpg';
import Boat6 from '../../../pictures/fleet/boat6.jpg';
import Boat7 from '../../../pictures/fleet/boat7.jpg';

export default function() {
  return (
      <div className="row">   
        <div class="column">
          <div class="color">
            <img src={Boat1} />
              <span class="caption">53 Dreams</span>
          </div>
          <div class="color">
            <img src={Boat3} />
              <span class="caption">Rum Runner 510</span>
          </div>
          <div class="color">
            <img src={Boat4} />
              <span class="caption">Sicario</span>
          </div>
        </div>

        <div class="column">
          <div class="color">
            <img src={Boat5} />
              <span class="caption">65 Leviathan </span>
          </div>
          <div class="color">
            <img src={Boat6} />
              <span class="caption">Pura Vida</span>
          </div>
          <div class="color">
            <img src={Boat7} />
              <span class="caption">Riptide</span>
          </div>
        </div> 
      </div>

  );
}