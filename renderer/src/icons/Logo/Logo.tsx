/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
    color: string;
    className: any;
}

export const Logo = ({ color = "black", className }: Props): JSX.Element => {
    return (
        <img
            src="https://i.ibb.co/M2LR1qR/logo.png"
            alt="logo"
            height={38}
            width={38}
        />
    );
};

Logo.propTypes = {
    color: PropTypes.string,
};
