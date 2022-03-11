import React from 'react';
import "./Loader.css";

//README//


const Loader = ({ loadingMsg, styling }) => {
    return (
        <>
            <div class="loader"></div>
            <p style={styling}>
                {loadingMsg}
            </p>
        </>
    );
};

export default Loader;