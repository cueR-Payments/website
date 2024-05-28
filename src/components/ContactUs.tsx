import React from "react";
import { location, map, phone } from "../images";
import { motion } from "framer-motion";

const ContactUs = () => {
  // const mapContainerStyle = {
  //   width: "100%",
  //   height: "400px",
  // };

  // const center = {
  //   lat: 6.5965,
  //   lng: 3.3566,
  // };
  return (
    <div className="contactusContainer" id="contactUs">
      <div className="contactus">
        <div className="inputContainer1">
          <p className="contact_header">Contact Us</p>
          <p className="content_content">
            Whether you’re training for certifications or job skills, we have
            different training options that will suit your need.
          </p>
        </div>
        <div className="inputContainer">
          <p className="topTitle">Your Name</p>
          <input
            type="text"
            placeholder="e.g. John Doe"
            className="inputField"
          />
        </div>
        <div className="inputContainer">
          <p className="topTitle">Email</p>
          <input
            type="text"
            placeholder="e.g. johndoe@gmail.com"
            className="inputField"
          />
        </div>
        <div className="inputContainer">
          <p className="topTitle">Your Message</p>
          <textarea
            aria-multiline
            placeholder="Your message goes here"
            className="textArea"
            style={{
              height: "120px",
              width: "100%",
              resize: "none",
            }}
          />
          <button className="sendButton">Send</button>
        </div>
      </div>
      <div className="mapContainer">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript> */}
          <img src={map} className="map" alt="map" />
          <br />
          <div className="bottomMapContainer">
            <button className="bottomMapbutton">
              <img src={location} alt="locationImg" />
              &nbsp;
              <p className="locationContactText">
                2216177, Ikeja GRA, John Doe
              </p>
            </button>
            <button className="bottomMapbutton">
              <img src={phone} alt="phoneImg" />
              <p className="locationContactText">
                2216177, Ikeja GRA, John Doe
              </p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
