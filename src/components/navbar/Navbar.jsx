import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

const RNavbar = () => {
  const props = {
    items: [
      {
        text: "Home",
        
      },
      {
        text: "about",
        
      },
      {
        text: "Custom",
                    
      },
      {
        text: "Contact",
        
      },
    ],
    logo: {
      text: "AIWithYou", 
    },
    style: {
      barStyles: {
        background: "#5e14b3",
      },
      sidebarStyles: {
        background: "#5d2edf",
        buttonColor: "white",
      },
      logoStyles: {   
        // background: "white", 
        padding: "10px",
        fontSize: "1.3rem",
        color:"red",  
      }
    },
  };
  return (

      <Navbar {...props} />
   
  );
};


export default RNavbar;
