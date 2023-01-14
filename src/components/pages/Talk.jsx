import React from 'react'
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import  "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";


  
const  Talk = () => {
  const [ischat,setIsChat]=React.useState(false)
       const [open1, setOpen1] = React.useState(false);
  let [mval,setMval]=React.useState("")
  let [messageList, setMessageList] = React.useState([
    {
      id: "1",
      message: "Welcome Back",
      time: new Date().toString(),
      type: "text",
      senderId: "1",
      sentAt: new Date().toString(),
      direction: "outgoing",
    },
  ]);
   const [opend, setOpend] = React.useState(false);
  
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };
  async function fetchdata(val) {
    try{
    const responce = await fetch(
      `https://vem77hljnc.execute-api.us-east-2.amazonaws.com/text/${val}`
    );
    const data = await responce.json();
    
    return data;}
  
    catch(err){
      setOpen1(true)
      return "//end//"
    }
  }
  return (
    <Box sx={{ mt: "6rem", position: "relative", height: "500px" }}>
      <Typography
        variant="h4"
        color="primary"
      >
        Chat Here With a Mechine
      </Typography>
      <MainContainer responsive>
        <ChatContainer>
          <MessageList
            typingIndicator={
              ischat && <TypingIndicator content="Robot is typing" />
            }
          >
            {messageList.length > 0 &&
              messageList.map((item, index) => {
                return (
                  <Message
                    key={index}
                    model={{
                      message: item.message,
                      sentTime: "just now",
                      sender: "Joe",
                      direction: item.direction,
                    }}
                  />
                );
              })}
          </MessageList>

          <MessageInput
            autoFocus
            placeholder="Type message here"
            attachButton={false}
            onSend={async () => {
              await setMessageList([
                ...messageList,
                {
                  id: "1",
                  message: mval,
                  time: new Date().toString(),
                  type: "text",
                  senderId: "1",
                  sentAt: new Date().toString(),
                  direction: "incoming",
                },
              ]);

              setIsChat(true);
              setMval("");
              let rmessage = await fetchdata(mval);
              if (rmessage === "Internal Server Error")
              {
                setOpen1(true)
              rmessage="i am not available to talk "
              }
               setIsChat(false);

              await setMessageList([
                ...messageList,
                {
                  id: "1",
                  message: mval,
                  time: new Date().toString(),
                  type: "text",
                  senderId: "1",
                  sentAt: new Date().toString(),
                  direction: "incoming",
                },

                {
                  id: "1",
                  message: rmessage,
                  time: new Date().toString(),
                  type: "text",
                  senderId: "1",
                  sentAt: new Date().toString(),
                  direction: "outgoing",
                },
              ]);
            }}
            value={mval}
            onChange={(e) => {
              setMval(e);
            }}
          />
        </ChatContainer>
      </MainContainer>
      <Snackbar
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose1}
        position="center"
        anchorOrigin={{vertical:"top",horizontal:"center"}}
      >
        <Alert
          onClose={handleClose1}
          severity="error"
          sx={{ width: "100%" }}
        >
          Something Went Wrong
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Talk
