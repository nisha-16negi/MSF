import "../ContactDetails/ContactDetails.css";
import React, { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import NextButton from "../Button/NextButton";

const ContactDetails = (props) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
  });

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem("contactDetails"));
    if (storedDetails) {
      setDetails(storedDetails);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNext = () => {
    localStorage.setItem("contactDetails", JSON.stringify(details));
    props.onNext();
  };
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
              <input type="text" name="name" value={details.name} placeholder="Your Name" data-testid="name" onChange={handleChange}/>
              <IoPersonOutline className="icon" />
            </div>
          </div>
          <div className="input-container">
            <label>Email</label>
            <div className="input">
              <input type="email" name="email" value={details.email} placeholder="Your Email Address" data-testid="email" onChange={handleChange}/>
              <CiMail className="icon" />
            </div>
          </div>
        </div>
        <div className="sub-container">
          <div className="input-container">
            <label>Phone Number</label>
            <div className="input">
              <input type="tel" name="phone" value={details.phone} maxLength={10} placeholder="Phone Number" data-testid="phone-num" onChange={handleChange}/>
              <IoPhonePortraitOutline className="icon" />
            </div>
          </div>
          <div className="input-container">
            <label>Company Name</label>
            <div className="input">
              <input type="text" name="companyName" value={details.companyName} placeholder="Company Name" data-testid="company-name" onChange={handleChange}/>
              <FaRegBuilding className="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-btn">
        <NextButton onNext={handleNext}/>
      </div>
    </>
  );
};

export default ContactDetails;
