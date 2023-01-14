
import {  Route,Routes,Link } from "react-router-dom"
import MaterialNavbar from "./components/navbar/MaterialNavbar"
import Home from "./components/pages/Home"
import Talk from "./components/pages/Talk"
import AiImage from "./components/pages/AiImage"
import Footer from "./components/footer/Footer"

function App() {



  return (
    <div className="app">
      <MaterialNavbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/talkwithme"
            element={<Talk />}
          />
          <Route
            path="/createaiimage"
            element={<AiImage />}
          />
          <Route
            path="*"
            element={
              <div  className="divcenter">
                <h1>Noting Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
