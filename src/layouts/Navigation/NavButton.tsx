"use client";

import { gsap } from "gsap";
import { Button } from "@/components/interactivity";
import { H2 } from "@/components/typography";

export default function NavButton() {
  const handleClick = () => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to("#navLinks", {
        y: -435,
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
    <div className="z-40 fixed bottom-0 w-full p-4 drop-shadow-lg md:hidden">
      <Button onClick={handleClick}>
        <H2>
          <span className="flex justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="fill-slate-700"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </H2>
      </Button>
    </div>
  );
}
