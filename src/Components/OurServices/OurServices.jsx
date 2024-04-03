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
                isSelect === "value1" ? "-selected" : ""
              }`}
              onClick={() => {
                setIsSelect("value1");
              }}
            >
              <LuScreenShare color="#4A3AFF" />
              <span className="services">Development</span>
            </div>
            <div
              data-testid="web-service"
              className={`service-container${
                isSelect === "value2" ? "-selected" : ""
              }`}
              onClick={() => {
                setIsSelect("value2");
              }}
            >
              <MdOutlineScreenSearchDesktop color="#4A3AFF" />
              <span className="services">Web Design</span>
            </div>
          </div>
          <div className="our-services">
            <div
              data-testid="marketing-service"
              className={`service-container${
                isSelect === "value3" ? "-selected" : ""
              }`}
              onClick={() => {
                setIsSelect("value3");
              }}
            >
              <HiSpeakerphone color="#4A3AFF" />
              <span className="services">Marketing</span>
            </div>
            <div
              data-testid="other-service"
              className={`service-container${
                isSelect === "value4" ? "-selected" : ""
              }`}
              onClick={() => {
                setIsSelect("value4");
              }}
            >
              <IoMdSettings color="#4A3AFF" />
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
