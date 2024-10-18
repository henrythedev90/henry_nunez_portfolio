"use client";
import React from "react";

const SplitText = ({ text }: { text: string }) => {
  return (
    <>
      <span>
        {text.split("").map((char, index) => {
          const style = { animationDelay: `${0.5 + index / 10}s` };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    </>
  );
};

export default SplitText;
