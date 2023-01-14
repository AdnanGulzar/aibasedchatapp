import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Container, Button, Snackbar ,Alert} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const handleChange = (event) => {
    setName(event.target.value);
  };

const AiImage = () => {
  const [isrc, setIcrc] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [opend, setOpend] = React.useState(false);
  const handleClosed = () => {
    setOpend(false);
  };
  const handleToggled = () => {
    setOpend(!open);
  };
  const [text, setText] = React.useState("");
const handleChange = (event) => {
  setText(event.target.value);
  
};
async function fetchdata(val) {
  try{
  const responce = await fetch(
    `https://vem77hljnc.execute-api.us-east-2.amazonaws.com/image/${val}`
  );
  const data = await responce.json();
  console.log(data)
  return data;}
  catch(err){
    setOpen1(true);
    setOpen(false)
  }
}

  const handleClose1= (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  return (
    <>
      <Snackbar
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose1}
          severity="error"
          sx={{ width: "100%" }}
        >
          Something Went Wrong
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        open={opend}
        onClose={handleClosed}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Container maxWidth="sm"  >
            {/* <img
              src={isrc}
              className="img"
            /> */}
            <LazyLoadImage
              alt={isrc}
              effect="blur"
              src={isrc}  
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <a
            href={isrc}
            download="image.jpg"
            target="_blank"
          >
            <Button
              onClick={() => {
                handleClosed();
              }}
              autoFocus
            >
              Download
            </Button>
          </a>
        </DialogActions>
      </Dialog>
      <Container maxWidth="sm">
        <div className="divcenter">
          <Typography
            sx={{ textAlign: "center" }}
            variant="h6"
          >
            Think SomeThing you want to create as an image and write here the
            advance technology of Artificial Intelligence will paint it for you
          </Typography>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <TextField
              fullWidth
              label="Write your Imagination Here"
              id="fullWidth"
              value={text}
              onChange={handleChange}
            />
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            onClick={async () => {
              setOpen(true);
              if (text.length < 5) {
                alert("Please write at least 5 characters");
                setOpen(false);
              } else {
                let rmessage = await fetchdata(text);
                if (rmessage === "Internal Server Error") {
                  setOpen1(true);
                  setOpen(false);
                } else {
                  setOpend(true);
                  setOpen(false);
                  setIcrc(rmessage);
                }

                // setOpen(true);
              }
            }}
          >
            CREATE AN IMAGE
          </Button>
        </div>
      </Container>
    </>
  );
}

export default AiImage
