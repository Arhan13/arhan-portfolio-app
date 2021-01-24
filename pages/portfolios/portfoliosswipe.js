import { useState } from "react";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetUser } from "@/actions/user";
import { useDeletePortfolio } from "@/actions/portfolios";
import PortfolioApi from "@/lib/api/portfolios";
import { isAuthorized } from "@/utils/auth0";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { useRouter } from "next/router";
//import ParticlesBg from "particles-bg";
import { LiquidSwipe } from "helpers/liquidswipe";
import PortfolioCard from "@/components/PortfolioCard";

var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42",
};

// import ParticlesBg from "particles-bg";

//Components for components to render
const BluePage = ( initialPortfolios ) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (

    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-coolBlue"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          portfolios && {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const RedPage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-red"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const OrangePage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-sunrise"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const BlackPage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-black"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const AtlasPage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-atlas"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const DimigoPage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-dimigo"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const GreenPage = ({
  dataU,
  loadingU,
  initialPortfolios,
  router,
  deletePortfolio,
}) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        header="Portfolios"
        className="portfolio-page cover cover-mojito"
        title="My Experience - Arhan Choudhury"
      >
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col
              md="4"
              key={portfolio._id}
              onClick={() => {
                //href and attribute
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") && (
                  <>
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const PortfoliosSwipe = ({ portfolios: initialPortfolios }) => {
  //debugger
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      const newPortfolios = portfolios.filter((p) => {
        if (p._id !== portfolioId) {
          return true;
        }
        return false;
      });
      setPortfolios(newPortfolios);
    }
  };

  //Components to render
  var componentsToRender = [
    <BluePage initialPortfolios />,
    <OrangePage initialPortfolios />,
    <BlackPage initialPortfolios />,
    <AtlasPage initialPortfolios />,
    <DimigoPage initialPortfolios />,
    <GreenPage initialPortfolios />,
    <RedPage initialPortfolios />,
  ];

  var backgroundColors = [
    "blue",
    "orange",
    "black",
    "",
    "purple",
    "pink",
    "green",
    "red",
  ];

  return (
    <>
      <LiquidSwipe components={componentsToRender} colors={backgroundColors} />
    </>
  );
};

//This function is called during the build time
//Imporves performance of page
//It will create static page with dynamic data

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
    revalidate: 1,
  };
}

export default PortfoliosSwipe;
