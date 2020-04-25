import Head from "next/head";
import styled from "styled-components";
import { Hello } from "./demo";
import Loader from "./loader";

import VercelSVG from "../public/vercel.svg";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Hello compiler="tcs" framework="react" />
      <Loader />
    </Main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <VercelSVG style={{ fill: "var(--color-text)" }} />
      </a>
    </footer>
  </Container>
);

export default Home;
