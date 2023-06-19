"use client";

import { gsap } from "gsap";

export default function CloseButton() {
  const handleClick = () => {
    gsap.to("#navLinks", {
      y: 440,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <span>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-700 cursor-pointer"
        onClick={handleClick}
      >
        <path d="M33.25 11.2174L30.7825 8.74994L21 18.5324L11.2175 8.74994L8.75 11.2174L18.5325 20.9999L8.75 30.7824L11.2175 33.2499L21 23.4674L30.7825 33.2499L33.25 30.7824L23.4675 20.9999L33.25 11.2174Z" />
      </svg>
    </span>
  );
}
