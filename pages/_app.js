import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";

const App = ({ Component, pageProps }) => {
  console.log(process.env.AUTH0_DOMAIN);
  return <Component {...pageProps} />;
};

export default App;
