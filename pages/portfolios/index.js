import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import {useRouter} from 'next/router';
import PortfolioCard from "@/components/PortfolioCard";

const Portfolios = ({ portfolios }) => {
  //debugger
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();
  //console.log(error);
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header="Portfolios" className="portfolio-page">
        <Row>
          {/*Iterate over the columns */}
          {portfolios.map((portfolio) => (
            <Col md="4" key={portfolio._id} onClick={() => {
              //href and attribute
              router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
            }}>
              <PortfolioCard portfolio={portfolio} />
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
  const portfolios = json.data  ;
  return {
    props: { portfolios },
  };
}





export default Portfolios;
