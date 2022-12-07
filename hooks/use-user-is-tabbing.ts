import * as React from "react";

const useUserIsTabbing = () => {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add("user-is-tabbing");
      }
    }

    function handleMouseDown() {
      document.body.classList.remove("user-is-tabbing");
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
};

// useUserIsTabbing();
