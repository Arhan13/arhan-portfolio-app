import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";
import withAuth from "@/hoc/withAuth";
import PortfolioForm from "@/components/PortfolioForm";

const PortfolioNew = ({ user, loading: userLoading }) => {
  const createPortfolio = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(PortfolioNew)("admin");
