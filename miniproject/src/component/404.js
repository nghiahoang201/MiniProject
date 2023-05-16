import React from "react";
import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <>
      <Box align="center">
        <Typography variant="h1" color="error">
          404
        </Typography>
        <Typography variant="h6" color="black">
          Not found
        </Typography>
      </Box>
    </>
  );
};

export default Error;
