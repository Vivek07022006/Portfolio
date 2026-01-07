import { useEffect } from "react";

export default function InspectGuard() {
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      alert("😄 Oops! Trying to copy my code?\nNice try bro!");
      window.location.href = "/";
    };

    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return null;
}
