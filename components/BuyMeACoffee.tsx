"use client";

import { useEffect } from "react";

export default function BuyMeACoffee() {
  useEffect(() => {
    if (document.getElementById("bmc-script")) return;

    const script = document.createElement("script");
    script.id = "bmc-script";
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (window.BMCWidget) {
        // @ts-ignore
        window.BMCWidget.init({
          widget: "floating",
          name: "anushkaams",
          description: "Support WebToolsSpace ☕",
          message: "If you like these tools, you can support the project!",
          color: "#2563eb",
          position: "Right",
          x_margin: 18,
          y_margin: 18,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
