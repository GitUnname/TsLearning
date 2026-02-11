import React from "react";
import ReactDOM from "react-dom/client";
import favicon from "./assets/icons/favicon.svg";

const link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
link.type = "image/svg+xml";
document.head.appendChild(link);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>MyApp</div>
  </React.StrictMode>
);
