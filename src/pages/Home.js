import React from 'react';
import { Link } from 'react-router-dom';
import { Template, ContentWrapper } from '../styles/home';
import thinking from '../images/thinking.png';

function Home() {
  return (
    <Template>
      <ContentWrapper>
        <div className="imageContainer">
          <img src={thinking} alt="thinking" />
        </div>
        <div className="titleContainer">
          <p>Do you want to learn about</p>
          <h1 className="title">Clear Communication?</h1>
          <Link to={"/content"} className="button">Click Me</Link>
        </div>
      </ContentWrapper>
    </Template>
  )
}

export default Home;