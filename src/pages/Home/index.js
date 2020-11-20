import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("oi")
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Home;