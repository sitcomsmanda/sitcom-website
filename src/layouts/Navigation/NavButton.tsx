"use client";

import { gsap } from "gsap";
import { Button } from "@/components/interactivity";
import { H2 } from "@/components/typography";

export default function NavButton() {
  const handleClick = () => {
    gsap.to("#navLinks", {
      y: -440,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="z-40 fixed bottom-0 w-full p-4 drop-shadow-lg">
      <Button onClick={handleClick}>
        <H2>
          <span className="flex justify-center items-center gap-4">
            <svg
              width="42"
              height="28"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-700"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 8V6H21.5V8H3.5ZM3.5 13H21.5V11H3.5V13ZM3.5 18H21.5V16H3.5V18Z"
              />
            </svg>
          </span>
        </H2>
      </Button>
    </div>
  );
}
