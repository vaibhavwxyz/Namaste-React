import { useState } from "react";
import AboutInsta from "./AboutInsta";
import ContactInsta from "./ContactInsta";
import CareerInsta from "./CareerInsta";

const InstaMart = () => {
  const [isVisible, setIsVisible] = useState();

  return (
    <div>
      <AboutInsta />
      <ContactInsta />
      <CareerInsta />
    </div>
  );
};

export default InstaMart;
