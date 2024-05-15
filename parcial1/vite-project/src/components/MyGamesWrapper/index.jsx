import React from "react"
import "../MyGamesWrapper/index.css"
function MyGamesWrapper({ children }) {
    return (
    <div id="gamesWrapper">
        {children}
    </div>)
}
export default MyGamesWrapper