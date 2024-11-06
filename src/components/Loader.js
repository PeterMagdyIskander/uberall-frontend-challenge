import React from "react";
const Loader = () => {
    return (
        <div className="loader-container">
            <div className="logo-container">
                <div className="uberall-logo">
                    <div className="filling"></div>
                </div>
                <div className="orbit">
                    <div className="moon"></div>
                </div>
            </div>
            <h1>Please wait, this may take a while</h1>
        </div>

    )
}

export default Loader;
