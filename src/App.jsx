import React from "react";
import { Routes, Route } from "react-router-dom";

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
import Contact from "./routes/contact/contact.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Index />}
        />
        <Route
          path="/sponsorship"
          element={<Sponsorship />}
        />
        <Route
          path="/team"
          element={<Team />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/robots"
          element={<Robots />}
        />
        <Route
          path="/growing-up-with-robots"
          element={<Gur />}
        />
        <Route
          path="/outreach"
          element={<Outreach />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
