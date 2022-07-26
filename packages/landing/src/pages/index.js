import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Logo from "common/assets/image/cryptoModern/psc-logo.jpg"
import Image from 'next/image';
import CountDown from 'containers/CryptoModern/CountDown';


import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from 'containers/CryptoModern/cryptoModern.style';

const CryptoModern = () => {
  var d = new Date();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Police Service Commission</title>
          <meta name="Description" content="Police Recruitment" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}

        <nav>
          <div className="nav">
            {" "}
            <Image
              src={Logo}
              alt="Picture of the author"
              width="150px"
              height="150px"
            />
          </div>
          <style jsx>{`
            header,
            nav,
            nav {
              position: sticky;
              top: 2rem;
              margin-top:1rem;
            }
            .nav {
              padding: 10px 25px;
              display:flex;
              margin:auto;
              justify-content:center;
             
            }
            main {
              height: 100vh;
              background-color: #99d;
            }
          `}</style>
        </nav>
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active"></Sticky>
          <ContentWrapper>
            <CountDown />
          </ContentWrapper>
          <Sticky bottom={0} innerZ={9999}>
            <footer
              className="container"
              // style={{ position: 'fixed', left: 0, bottom: 0 }}
            >
              <div className=" col">
                <p className="text">
                  {/* Copyright © 2022 | Police Service Commission | All rights reserved. Powered by Emplug */}
                  Copyright © {d.getFullYear()}| Police Service Commission | All
                  rights reserved. Powered by{" "}
                  <a
                    href="https://www.emplug.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Emplug
                  </a>{" "}
                  {/* {d.getFullYear()}. | All rights reserved */}
                </p>
                <style jsx>{`
                  .container {
                    display: flex;
                    margin: auto;
                  }
                  p {
                    color: white;
                    text-align: center;
                  }
                  a {
                    color: green;
                  }
                `}</style>
              </div>
            </footer>
          </Sticky>
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default CryptoModern;
