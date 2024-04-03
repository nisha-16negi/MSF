import "../ContactDetails/ContactDetails.css";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import NextButton from "../Button/NextButton";

const ContactDetails = (props) => {
  return (
    <>
      <div className="detail-container">
        <h1>Contact details</h1>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </div>
        <div className="sub-container">
          <div className="input-container">
            <label >Name</label>
            <div className="input">
              <input type="text" placeholder="Your Name" data-testid="name"/>
              <IoPersonOutline className="icon" />
            </div>
          </div>
          <div className="input-container">
            <label>Email</label>
            <div className="input">
              <input type="email" placeholder="Your Email Address" data-testid="email"/>
              <CiMail className="icon" />
            </div>
          </div>
        </div>
        <div className="sub-container">
          <div className="input-container">
            <label>Phone Number</label>
            <div className="input">
              <input type="tel" maxLength={10} placeholder="Phone Number" data-testid="phone-num"/>
              <IoPhonePortraitOutline className="icon" />
            </div>
          </div>
          <div className="input-container">
            <label>Company Name</label>
            <div className="input">
              <input type="text" placeholder="Company Name" data-testid="company-name"/>
              <FaRegBuilding className="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-btn">
        <NextButton onNext={props.onNext} />
      </div>
    </>
  );
};

export default ContactDetails;
