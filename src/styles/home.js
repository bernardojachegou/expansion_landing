import styled from 'styled-components';

export const Template = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: blue;

  .imageContainer {
    background-color: green;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: yellow;
    

  }

  .title {
    font-family: 'Satisfy', cursive;
    font-size: 50px;
  }

  .titleContainer p {
    font-family: 'Satisfy', cursive;
    font-size: 30px;
  }

  .button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 4px;
    position: relative;
    background-color: #404040;
    border: none;
    color: #fff;
    padding: 20px;
    width: 200px;
    text-align: center;
    transition-duration: 0.8s;
    overflow: hidden;
    box-shadow: 0 5px 15px #193047;
    border-radius: 4px;
    margin-top: 20px;
    text-decoration: none;
  }

  .button:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #808080;
    color: #000;
  }

  .button:after {
    content: "";
    background: #808080;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

.button:focus { outline:0; }

`;
