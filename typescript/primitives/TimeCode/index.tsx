/**
 *
 * @description Render a time-string to display the current time in your respective time-zone.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * Copyright © 2022. CDC® All rights reserved.
 *
 **/

import { useCallback, useEffect, useState } from "react";
import * as React from "react";

/*
 *
 * Be sure to style your string of text.
 * Monospace fonts work best for any changing text.
 *
 */

const TimeString = StyledTime;

export const TimeCode = ({ variant }: { variant?: "mobile" }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * Time Renderer...
   */
  const renderTime = useCallback((date: Date) => {
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();
    const isAm = hours <= 12;
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    /*
     * Wrap your raw elements in a <span> to help
     * with hydration and placement.
     */
    return (
      <TimeString>
        <span>
          {hours}:{minutes}:{seconds} <span>{isAm ? "AM" : "PM"}</span>
        </span>
      </TimeString>
    );
  }, []);

  return (
    <>
      <div
        css={{
          color: "$sage9",
          display: "flex",
          alignItems: "center",
          ...(variant === "mobile"
            ? {
                flexGrow: 1,
                justifyContent: "center",
              }
            : undefined),
        }}>
        {/* <!-- This will render <TimeString /> --> */}
        {renderTime(now)}
      </div>
    </>
  );
};
