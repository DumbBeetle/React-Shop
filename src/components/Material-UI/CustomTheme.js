import React from 'react';
import {createTheme} from "@mui/material";

const CustomTheme = () => {
    return  createTheme({
        roundButton: {
            minWidth: "35px",
            height: "35px",
        },
    })
};

export default CustomTheme;