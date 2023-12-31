"use client";

import { gsap } from "gsap";

export default function CloseButton() {
  const handleClick = () => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to("#navLinks", {
        y: 435,
        duration: 0.5,
        ease: "power2.inOut",
      });

      return () => {
        gsap.set("#navLinks", {
          clearProps: "all",
        });
      };
    });
  };

  return (
    <div
      className="transition-all duration-150 ease-in-out cursor-pointer w-full py-1 flex justify-center items-center rounded-full hover:bg-green-200 active:bg-green-100 md:hidden"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 384 512"
        className="fill-slate-700"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </div>
  );
}
