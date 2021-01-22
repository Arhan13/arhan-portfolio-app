import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const PageHeader = ({ header }) => (
  <div className="page-header">
    <h1 className="page-header-title">{header}</h1>
  </div>
);

const BasePage = (props) => {
  const router = useRouter();
  const {
    className = "",
    header,
    title = "Arhan's Portfolio",
    metaDescription = "My name is Arhan Choudhury and I am a web developer and a software engineer. I am currently doing my Btech from SRM Institute of Science and Technology in Computer Science (2019-2023).",
    children,
    indexPage,
    canonicalPath,
    noWrapper,
  } = props;
  const pageType = indexPage ? "index-page" : "base-page";
  const Wrapper = noWrapper ? React.Fragment : Container;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`${process.env.BASE_URL}/images/section-1.png`}
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
          rel="stylesheet"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
      </Head>

     
      <div className={`${pageType} ${className}`}>
        <Wrapper>
          {header && <PageHeader header={header} />}
          {children}
        </Wrapper>
      </div>
    </>
  );
};

export default BasePage;
