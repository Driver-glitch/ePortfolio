import React from 'react';
import HomeCards from '../home/HomeCards';
import Footer from '../footer/Footer';
import HomeDisplay from '../homedisplay/HomeDisplay';

function Home() {
  return (
    <>
      <HomeDisplay/>
      <HomeCards />
      <Footer/>
    </>
  );
}

export default Home;
