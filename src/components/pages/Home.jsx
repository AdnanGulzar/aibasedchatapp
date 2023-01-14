import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import Footer from "../../components/footer/Footer"








export default function Home() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 10,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/robot_1f916.png" />
            </Box>

            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              CONSIDER MECHINE AS YOUR COLLIGUE AND FRIEND
            </Typography>
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Work with AI
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is an Ara of AI .You can Automate your work with AI.Most of
              the work that is repeated and has some pattern that can be done
              using Automation ang ML. This can make your work faster .Even you
              can make Arts with it and you can make your life Easy and fast
              .Use it in your business and dialy life task.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="talkwithme">
                <Button variant="contained">tALK WITH AI</Button>
              </Link>
              <Link to="/createaiimage">
                <Button variant="contained">CREATE AN IMAGE</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* <Footer/> */}
    </>
  );
}
