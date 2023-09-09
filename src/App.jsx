import React from "react";
import { Routes, Route } from "react-router-dom";

//general components
import PublicMarkdown from "./components/publicMarkDown.jsx";

//root components
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
//routes
import Index from "./routes/index/index.jsx";
import Sponsorship from "./routes/sponsorship/sponsorship.jsx";
import Team from "./routes/team/team.jsx";
import About from "./routes/about/about.jsx";
import Robots from "./routes/robots/robots.jsx";
import Gur from "./routes/growing-up-with-robots/gur.jsx";
import Outreach from "./routes/outreach/outreach.jsx";
import Club from "./routes/club/club.jsx";
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
          path="/sponsorship/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"/md/routes/"}
              parentRoute={"sponsorship/"}
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
              underWhichPublicDir={"/md/routes/"}
              parentRoute={"robots/"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Gur */}
        <Route
          path="/growing-up-with-robots"
          element={<Gur />}
        />
        <Route
          path="/growing-up-with-robots/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"/md/routes/"}
              parentRoute={"gur/"}
              paramRouteName={"infoDoc"}
            />
          }
        />

        {/* Outreach */}
        <Route
          path="/outreach"
          element={<Outreach />}
        />
        <Route
          path="/outreach/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"/md/routes/"}
              parentRoute={"outreach/"}
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
          path="/outreach/:infoDoc"
          element={
            <PublicMarkdown
              underWhichPublicDir={"/md/routes/"}
              parentRoute={"club/"}
              paramRouteName={"infoDoc"}
            />
          }
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
