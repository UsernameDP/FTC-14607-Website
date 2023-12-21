import React from "react";
import { Routes, Route } from "react-router-dom";

//general components
import PublicMarkdown from "./components/publicMarkdown.jsx";

//root components
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
//routes
import Index from "./routes/index/index.jsx";
import Sponsorship from "./routes/sponsorship/sponsorship.jsx";
import SponsorshipPacket from "./routes/sponsorship/sponsorship-packet.jsx";
import Team from "./routes/team/team.jsx";
import About from "./routes/about/about.jsx";
import Robots from "./routes/robots/robots.jsx";
import Gur from "./routes/growing-up-with-robots/gur.jsx";
import Club from "./routes/club/club.jsx";
import Donate from "./routes/donate/donate.jsx";
import Contact from "./routes/contact/contact.jsx";
import InvalidRoute from "./routes/404/404.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Index />}
        />

        {/* Sponsorship */}
        <Route
          path="/sponsorship"
          element={<Sponsorship />}
        />
        <Route
          path="/sponsorship/sponsorship-packet"
          element={<SponsorshipPacket />}
        />
        <Route
          path="/sponsorship/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"md/routes"}
              parentRoute={"sponsorship"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Team */}
        <Route
          path="/team"
          element={<Team />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Robots */}
        <Route
          path="/robots"
          element={<Robots />}
        />
        <Route
          path="/robots/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"md/routes"}
              parentRoute={"robots"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Growing Up With Robots */}
        <Route
          path="/growing-up-with-robots"
          element={<Gur />}
        />
        <Route
          path="/growing-up-with-robots/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"md/routes"}
              parentRoute={"growing-up-with-robots"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Club */}
        <Route
          path="/club"
          element={<Club />}
        />
        <Route
          path="/club/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"md/routes"}
              parentRoute={"club"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Donate */}
        <Route
          path="/donate"
          element={<Donate />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<InvalidRoute />}
        />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
