import React from "react";

import Carou1 from "../../../pictures/carousel/suenos1.jpg"
import Carou2 from "../../../pictures/carousel/suenos2.jpg"
import Carou3 from "../../../pictures/carousel/suenos3.jpg"
import Carou4 from "../../../pictures/carousel/suenos9.jpg"
import Carou5 from "../../../pictures/carousel/suenos5.jpg"
import Carou6 from "../../../pictures/carousel/suenos6.jpg"
import Carou7 from "../../../pictures/carousel/suenos7.jpg"
import Carou8 from "../../../pictures/carousel/suenos8.jpg"

export default function() {

  return (

      <div className="home-content-container">
        <div className="home-content">

            <div className="background-img"></div>
            <div className="slider">
                <figure>
                    <img src={Carou1} a="carou" />
                    <img src={Carou2} a="carou" />
                    <img src={Carou4} a="carou" />
                    {/* <img src={Carou4} a="carou" />
                    <img src={Carou5} a="carou" />
                    <img src={Carou6} a="carou" />
                    <img src={Carou7} a="carou" />
                    <img src={Carou8} a="carou" /> */}
                </figure>
            </div>

            <div className="slogan-container">
              <p className="company">Trident Yachts</p>
              <p className="slogan">SETTING A NEW STANDARD</p>
            
            </div>

        <div className="carzone-2">
          <div className="slider">
                <figure>
                    <img src={Carou1} a="carou" />
                    <img src={Carou2} a="carou" />
                    <img src={Carou4} a="carou" />
                    {/* <img src={Carou4} a="carou" />
                    <img src={Carou5} a="carou" />
                    <img src={Carou6} a="carou" />
                    <img src={Carou7} a="carou" />
                    <img src={Carou8} a="carou" /> */}
                </figure>
            </div>
          </div>

        </div>
      </div>
       
    

  );
}

// import React from "react";

// import Carou1 from "../../../pictures/carousel/suenos1.jpg"
// import Carou2 from "../../../pictures/carousel/suenos2.jpg"
// import Carou3 from "../../../pictures/carousel/suenos3.jpg"
// import Carou4 from "../../../pictures/carousel/suenos9.jpg"
// import Carou5 from "../../../pictures/carousel/suenos5.jpg"
// import Carou6 from "../../../pictures/carousel/suenos6.jpg"
// import Carou7 from "../../../pictures/carousel/suenos7.jpg"
// import Carou8 from "../../../pictures/carousel/suenos8.jpg"


// export default function() {
//   return (

//     <div className="home-page-container">
//       <div className="home-content">
        
//         <div className="home-content-wrapper">
//           <p className="company">Trident Yachts</p>
//           <p className="slogan">SETTING A NEW STANDARD</p>
//         </div>

//         <div className="spacer40"></div>


//         <div className="home-content">
//          <div className="zone-2" >
//             <div className="slider">
//                  <figure>
//                      <img src={Carou1} a="carou" />
//                      <img src={Carou2} a="carou" />
//                      <img src={Carou4} a="carou" />
//                      {/* <img src={Carou4} a="carou" />
//                      <img src={Carou5} a="carou" />
//                      <img src={Carou6} a="carou" />
//                      <img src={Carou7} a="carou" />
//                      <img src={Carou8} a="carou" /> */}
//                  </figure>
//              </div> 
//          </div>
//         </div>
      
//     </div>
//     </div>
//   );
// }