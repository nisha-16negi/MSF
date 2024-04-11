import { useEffect } from "react";
import NextButton from "../Button/NextButton";
import PrevButton from "../Button/PrevButton";
import "../OurServices/OurServices.css";
import { LuScreenShare } from "react-icons/lu";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

import React, { useState } from "react";

const OurServices = (props) => {
  const [isSelect, setIsSelect] = useState(null);

  useEffect(() => {
    const storedService = localStorage.getItem("selectedService");
    if (storedService) {
      setIsSelect(storedService);
    }
  }, []);

  const handleClick = (service) => {
    setIsSelect(service);
    localStorage.setItem("selectedService", service);
  };
  return (
    <>
      <div className="services-container">
        <h1>Our services</h1>
        <div className="service-para">
          Please select which service you are interested in.
        </div>
        <div className="service-sub-container">
          <div className="our-services">
            <div
              data-testid="dev-service"
              className={`service-container${
                isSelect === "Development" ? "-selected" : ""
              }`}
              onClick={() => {
                handleClick("Development");
              }}
            >
              <LuScreenShare color="#4A3AFF" className="icons" />
              <span className="services">Development</span>
            </div>
            <div
              data-testid="web-service"
              className={`service-container${
                isSelect === "Web Design" ? "-selected" : ""
              }`}
              onClick={() => {
                handleClick("Web Design");
              }}
            >
              <MdOutlineScreenSearchDesktop color="#4A3AFF" className="icons" />
              <span className="services">Web Design</span>
            </div>
          </div>
          <div className="our-services">
            <div
              data-testid="marketing-service"
              className={`service-container${
                isSelect === "Marketing" ? "-selected" : ""
              }`}
              onClick={() => {
                handleClick("Marketing");
              }}
            >
              <HiSpeakerphone color="#4A3AFF" className="icons" />
              <span className="services">Marketing</span>
            </div>
            <div
              data-testid="other-service"
              className={`service-container${
                isSelect === "Other" ? "-selected" : ""
              }`}
              onClick={() => {
                handleClick("Other");
              }}
            >
              <IoMdSettings color="#4A3AFF" className="icons" />
              <span className="services">Other</span>
            </div>
          </div>
        </div>
      </div>
      <div className="service-btn">
        <PrevButton onPrevious={props.onPrevious} />
        <NextButton onNext={props.onNext} />
      </div>
    </>
  );
};

export default OurServices;
