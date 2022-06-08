import React from "react";

export default function() {
  return (
    <div className="content-grid-wrapper">
      <div className="top-column">
        <div className="form"> 

            <div className="form-group">
                <input type="text" id="fullName" placeholder="Your Name" />
                <label for="fullName">Your Name</label> 
            </div>

            <div className="form-group">
                <input type="text" id="number" placeholder="Your Phone Number" />
                <label for="number">Your Phone Number</label> 
            </div>

      
            {/* <div className="form-group">
                <input type="email" id="email" placeholder="Your Email" />
                <label for="email">Your Email</label> 
            </div> */}
          
            <div className="form-group">
                <textarea name="message" id="message" placeholder="Message"></textarea>                      
                <label for="message">Message</label> 
            </div>

            <div className="spacer10"></div>

            <div className="centered-btn-wrapper">
                <button type= "submit" class="contact-btn">Send</button>
            </div>
        </div>

        <div className="contact-bullet-points">
        <div className="contact-messsage">
              <h3>
              <b>TRIDENT YACHTS</b>
              </h3> 

              <div className="spacer10"></div>

              Please use the information below to contact us. <br />If you click on the map you can get <br /> driving directions to our facility.
          
        </div>

            <div className="spacer40"></div>

          <div className="bullet-point-group">
              <div className="text">Phone:(305)230-8004</div>   
          </div>

          <div className="bullet-point-group">
              <div className="text">Email: SaltyDog@tridentyachts.com</div>   
          </div>

          <div className="bullet-point-group">
              <div className="text">Miami, Fl</div>   
          </div>
        </div>
      </div>
    <div className="map"> 
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659495.31049465!2d-80.43295404169356!3d25.83657613254666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3d37ce40001%3A0xd9e52093d499f4ec!2sBoat%20Works%20Miami!5e0!3m2!1sen!2sus!4v1649476073035!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>

      </div>
  );
}