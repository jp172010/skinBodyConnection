import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Schedule from "./components/schedule";
import VirCon from "./components/virCon";
import VidGallery from "./components/videoGallery"
import PicGallery from "./components/pictureGallery"
import Store from "./components/store";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url("images/blurred.jpg")`,
          backgroundAttachment: "fixed",
        }}
      >
        <Switch>
        <Route path="/PictureGallery">
            <PicGallery />
          </Route>
          <Route path="/VideoGallery">
            <VidGallery />
          </Route>
          <Route path="/virCon">
            <VirCon />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
