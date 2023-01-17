import {Button, styled} from "@mui/material";


export const RoundButton = styled(Button)(({theme}) => ({
    minWidth: "0px",
    width: "35px",
    height: "35px",
    margin: "0px 10px",
    borderRadius: "50%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.4)",
}))