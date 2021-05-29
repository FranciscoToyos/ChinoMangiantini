import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Cards } from "../components/Card/Cards";
import { Footer } from "../components/Footer/Footer";

import "../assets/styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <Banner />
          <Cards />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
