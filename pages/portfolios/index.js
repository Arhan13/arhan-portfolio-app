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
import PortfolioCard from "@/components/PortfolioCard";

const Portfolios = ({ portfolios: initialPortfolios }) => {
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
  return (
    <BaseLayout
      user={dataU}
      loading={loadingU}
    >
      <BasePage header="Portfolios" className="portfolio-page" title="My Experience - Arhan Choudhury">
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

//This function is called during the build time
//Imporves performance of page
//It will create static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
    revalidate : 1,
  };
}

export default Portfolios;
