/**
 *
 * @description Render a string of text displaying vatious mouse events.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * Copyright © 2022. CDC® All rights reserved.
 *
 **/

import React, { useEffect, useState } from "react";

/**
 *
 * render your event.
 * we call this "Value"
 */

const Value = () => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, "0");
    };

    const setFromEvent = (event: {
      clientX: string | number;
      clientY: string | number;
    }) => {
      const x = format(event.clientX, 4);
      const y = format(event.clientY, 4);
      setDisplay(`X, Y:  ${x},${y}`);
    };

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <p
      css={{
        color: "$chxn4",
        fontSize: 14,
        fontFamily: "$antarcticanMono",
        // fontFamily: '$neueBit',
        fontWeight: "500",
        lineHeight: "28px",
        letterSpacing: "0.05rem",
        //transformOrigin: '0',
        // transform: 'rotate(90deg)'
      }}>
      <span>{display}</span>
    </p>
  );
};

export const CursorData = () => {
  return (
    <div
      css={{
        padding: 0,
        position: "relative",
        textAlign: "center",
      }}>
      <Value />
    </div>
  );
};

export default CursorData;
