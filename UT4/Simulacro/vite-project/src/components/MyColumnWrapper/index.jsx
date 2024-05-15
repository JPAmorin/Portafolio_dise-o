import React from "react";
import "../MyColumnWrapper/index.css";

function MyColumnWrapper({ children }) {
    return <div id="columnWrapper">{children}</div>;
}
export default MyColumnWrapper