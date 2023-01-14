import React from 'react'
import {Box,Typography} from "@mui/material"


function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <a
        // color="inherit"
        target="_blank"
        href="https://linkedin.com/in/adnangul"
      >
        Adnan Gul
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 6,borderTop:"1px solid black" }}
      component="footer"
    >
      <Typography
        variant="h6"
        align="center"
        gutterBottom
      >
        AIWI
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Chat app with Ai bases technology with mechine learing and deep learning techinique
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer

